import { storage } from '../storage/storage';
import { path } from '../const/api-const';
import { IStartDrive, ITableWinners, IWinners } from '../types/storage-types';
import { apiGarage, filter } from './services';
import { winnersComponent } from '../view/pages/page-render';
import { HTTPStatusCode } from '../types/http-status-codes';

const WINNERS_LIMIT = 10;

interface ISuccess {
  success: boolean;
}

export class ApiWinners {
  async updateStateWinners() {
    const page = storage.winnersPage;
    const sort = storage.sortBy;
    const order = storage.sortOrder;

    const { items, count } = await this.getWinners(page, sort, order);
    storage.winners = items as unknown as ITableWinners[];
    storage.winnersCount = Number(count);

    winnersComponent.renderTitle(storage.winnersCount);
    winnersComponent.renderPage(storage.winnersPage);
    winnersComponent.elementTable.renderTable(storage.winners);
    filter.selectedPaginationWinners();
  }

  async getWinners(page: number, sort: string, order: string, limit = WINNERS_LIMIT) {
    const response = await fetch(
      `${path.winners}?_page=${page}&_limit=${limit}${this.getSort(sort, order)}`
    );
    const items = (await response.json()) as IWinners[];

    return {
      items: await Promise.all(
        items.map(async (winner) => ({
          ...winner,
          ...(await apiGarage.getCar(winner.id)),
        }))
      ),
      count: response.headers.get('X-Total-Count'),
    };
  }

  async getWinner(id: number) {
    return (await (await fetch(`${path.winners}/${id}`)).json()) as IWinners;
  }

  async getWinnerStatus(id: number) {
    return (await fetch(`${path.winners}/${id}`)).status;
  }

  async deleteWinner(id: number) {
    await (await fetch(`${path.winners}/${id}`, { method: 'DELETE' })).json();
  }

  async createWinner(item: { [k: string]: number }) {
    await (
      await fetch(path.winners, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async updateWinner(id: number, item: IWinners) {
    await (
      await fetch(`${path.winners}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async saveWinner(id: number, time: number) {
    const winnerStatus = await this.getWinnerStatus(id);
    if (winnerStatus === HTTPStatusCode.NOT_FOUND) {
      await this.createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner = await this.getWinner(id);
      winner.wins += 1;
      winner.time = time < winner.time ? time : winner.time;
      await this.updateWinner(id, winner);
    }
  }

  getSort(sort: string, order: string) {
    if (sort && order) {
      return `&_sort=${sort}&_order=${order}`;
    }
    return '';
  }

  async startEngine(id: number) {
    return (await (
      await fetch(`${path.engine}?id=${id}&status=started`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()) as IStartDrive;
  }

  async stopEngine(id: number) {
    return (await (
      await fetch(`${path.engine}?id=${id}&status=stopped`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()) as IStartDrive;
  }

  async driveEngine(id: number) {
    const response = await fetch(`${path.engine}?id=${id}&status=drive`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch();
    return response.status !== HTTPStatusCode.OK
      ? { success: false }
      : { ...((await response.json()) as ISuccess) };
  }
}
