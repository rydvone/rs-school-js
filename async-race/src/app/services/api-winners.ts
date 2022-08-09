import { storage } from '../storage/storage';
import { path } from '../const/api-const';
import { IStartDrive, IWinners } from '../types/storage-types';
import { filter } from './services';
import { winnersComponent } from '../view/pages/page-render';
import { HTTPStatusCode } from '../types/http-status-codes';

const WINNERS_LIMIT = 10;

export class ApiWinners {
  async getWinners(page: number, sort: string, order: string, limit = WINNERS_LIMIT) {
    const response = await fetch(
      `${path.winners}?_page=${page}&_limit=${limit}${this.getSort(sort, order)}`
    );
    storage.winners = (await response.json()) as IWinners[];
    storage.winnersCount = Number(response.headers.get('X-Total-Count'));
    // const itemEl = await Promise.all(
    //   items.map(async (winner) => ({ ...winner, car: await apiGarage.getCar(winner.id) }))
    // );

    winnersComponent.renderTitle(storage.winnersCount);
    winnersComponent.renderPage(storage.winnersPage);
    // winnersComponent.elementTable.renderTable(storage.winnersPage);
    filter.selectedPaginationWinners();
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

  async createWinner(body: { [k: string]: number }) {
    await (
      await fetch(path.winners, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async updateWinner(id: number, body: IWinners) {
    await (
      await fetch(`${path.winners}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
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
    return (await (await fetch(`${path.engine}?id=${id}&status=started`)).json()) as IStartDrive;
  }

  async stopEngine(id: number) {
    return (await (await fetch(`${path.engine}?id=${id}&status=stopped`)).json()) as IStartDrive;
  }

  async driveEngine(id: number) {
    const response = await fetch(`${path.engine}?id=${id}&status=drive`).catch();
    // if (response.ok) {
    //   let json = await response.json();
    // } else {
    //   alert("Ошибка HTTP: " + response.status);
    // }
    // let success = true;
    if (response.status !== HTTPStatusCode.OK) {
      return { success: false };
    }
    // else {
    //   return { ...(await response.json() as ) };
    // }
  }
}
