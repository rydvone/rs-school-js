import { storage } from '../storage/storage';
import { path } from '../const/api-const';
import { IStartEngine, ITableWinners, IWinners } from '../types/storage-types';
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
    ).json()) as IStartEngine;
  }

  async stopEngine(id: number) {
    return (await (
      await fetch(`${path.engine}?id=${id}&status=stopped`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()) as IStartEngine;
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

// async getCars(page: number, limit = GARAGE_LIMIT) {
//   try {
//     const response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
//     Storage.cars = (await response.json()) as IStorageItem[];
//     Storage.carsCount = Number(response.headers.get('X-Total-Count'));
//     // return objGetCars;
//     // return {
//     //   items: (await response.json()) as IStorageItem[],
//     //   count: response.headers.get('X-Total-Count'),
//     // };
//     console.log(Storage.cars);
//     editComponent.renderTitle(Storage.carsCount);
//     itemsComponent.drawItems(Storage.cars);
//   } catch (err) {
//     console.log('This is CATCH Error -->', err);
//   }
// }

//   export const getWinners = async ({ page, limit = 10, sort, order }) => {
//   const response = await fetch(
//     `${WINNERS}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`
//   );
//   const items = await response.json();

//   return {
//     items: await Promise.all(
//       items.map(async (winner: string[]) => ({ ...winner, car: await getCar(winner.id) }))
//     ),
//     count: response.headers.get('X-Total-Count'),
//   };
// }

// // export const getCars = async (page: number, limit = 7): Promise<T> => {
// //   const response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
// //   const itemsResponce: Response<T> = await response.json(),

// //   // const objGetCars: IObjGetCars =
// //   // return  {
// //   //   items: await response.json(),
// //   //   count: response.headers.get('X-Total-Count'),
// //   // };
// //   return  {
// //     items: await response.json(),
// //     count: response.headers.get('X-Total-Count'),
// //   };
// // };

// // export const getCar = async (id: number) => (await fetch(`${GARAGE}/${id}`)).json();

// // export const createCar = async (body: IBodyGarage) =>
// //   (
// //     await fetch(GARAGE, {
// //       method: 'POST',
// //       body: JSON.stringify(body),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //   ).json();

// // export const deleteCar = async (id: number) => (await fetch(`${GARAGE}/${id}`, { method: 'DELETE' })).json();

// // export const updateCar = async (id: number, body: IBodyGarage) =>
// //   (
// //     await fetch(`${GARAGE}/${id}`, {
// //       method: 'PUT',
// //       body: JSON.stringify(body),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //   ).json();

// // export const startEngine = async (id: number) => (await fetch(`${ENGINE}?id=${id}&status=started`)).json();

// // export const stopEngine = async (id: number) => (await fetch(`${ENGINE}?id=${id}&status=stopped`)).json();

// // export const drive = async (id: number) => {
// //   const res = await fetch(`${ENGINE}?id=${id}&status=drive`).catch();
// //   return res.status !== HTTPStatusCode.OK ? { success: false } : { ...(await res.json()) };
// // };

// // const getSortOrder = (sort: string, order: string) => {
// //   if (sort && order) {
// //     return `&_sort=${sort}&_order=${order}`;
// //   }
// //   return '';
// // };

// // export const getWinners = async ({ page, limit = 10, sort, order }) => {
// //   const response = await fetch(
// //     `${WINNERS}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`
// //   );
// //   const items = await response.json();

// //   return {
// //     items: await Promise.all(
// //       items.map(async (winner: string[]) => ({ ...winner, car: await getCar(winner.id) }))
// //     ),
// //     count: response.headers.get('X-Total-Count'),
// //   };
// // }

// // export const getWinner = async (id: number) => (await fetch(`${WINNERS}/${id}`)).json();

// // export const getWinnerStatus = async (id: number) => (await fetch(`${WINNERS}/${id}`)).status;

// // export const deleteWinner = async (id: number) => (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();

// // export const createWinner = async (body: IBodyWinner) =>
// //   (
// //     await fetch(WINNERS, {
// //       method: 'POST',
// //       body: JSON.stringify(body),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //   ).json();

// // export const updateWinner = async (id: number, body: IBodyWinner) =>
// //   (
// //     await fetch(`${WINNERS}/${id}`, {
// //       method: 'PUT',
// //       body: JSON.stringify(body),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //   ).json();

// // export const saveWinner = async (id: number, time: number) => {
// //   const winnerStatus = await getWinnerStatus(id);

// //   if (winnerStatus === HTTPStatusCode.NOT_FOUND) {
// //     await createWinner({
// //       id,
// //       wins: 1,
// //       time,
// //     });
// //   } else {
// //     const winner = await getWinner(id);
// //     await updateWinner(id, {
// //       id,
// //       wins: winner.wins + 1,
// //       time: time < winner.time ? time : winner.time
// //     });
// //   }
// // }
