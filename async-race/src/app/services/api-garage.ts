import { path } from '../const/api-const';
import { storage } from '../storage/storage';
import { IObjString, IStorageItem } from '../types/storage-types';
import { editComponent, itemsComponent } from '../view/garage/page-garage';
import { filter } from './services';

const GARAGE_LIMIT = 7;

export class ApiGarage {
  async getCars(page: number, limit = GARAGE_LIMIT) {
    try {
      const response = await fetch(`${path.garage}?_page=${page}&_limit=${limit}`);
      storage.cars = (await response.json()) as IStorageItem[];
      storage.carsCount = Number(response.headers.get('X-Total-Count'));

      editComponent.renderTitle(storage.carsCount);
      editComponent.renderPage(storage.carsPage);
      itemsComponent.drawItems(storage.cars);
      filter.selectedPaginationGarage();
    } catch (err) {
      console.log('This is CATCH Error -->', err);
    }
  }

  async createCar(body: IObjString) {
    await (
      await fetch(path.garage, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number) {
    await (await fetch(`${path.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: number, body: IObjString) {
    await (
      await fetch(`${path.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
    editComponent.createEditUpdate();
  }

  async getCar(id: number) {
    return (await (await fetch(`${path.garage}/${id}`)).json()) as IStorageItem;
  }
}

// export const getCars = async (page: number, limit = 7): Promise<T> => {
//   const response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
//   const itemsResponce: Response<T> = await response.json(),

//   // const objGetCars: IObjGetCars =
//   // return  {
//   //   items: await response.json(),
//   //   count: response.headers.get('X-Total-Count'),
//   // };
//   return  {
//     items: await response.json(),
//     count: response.headers.get('X-Total-Count'),
//   };
// };

// export const getCar = async (id: number) => (await fetch(`${GARAGE}/${id}`)).json();

// export const createCar = async (body: IBodyGarage) =>
//   (
//     await fetch(GARAGE, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

// export const deleteCar = async (id: number) => (await fetch(`${GARAGE}/${id}`, { method: 'DELETE' })).json();

// export const updateCar = async (id: number, body: IBodyGarage) =>
//   (
//     await fetch(`${GARAGE}/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

// export const startEngine = async (id: number) => (await fetch(`${ENGINE}?id=${id}&status=started`)).json();

// export const stopEngine = async (id: number) => (await fetch(`${ENGINE}?id=${id}&status=stopped`)).json();

// export const drive = async (id: number) => {
//   const res = await fetch(`${ENGINE}?id=${id}&status=drive`).catch();
//   return res.status !== HTTPStatusCode.OK ? { success: false } : { ...(await res.json()) };
// };

// const getSortOrder = (sort: string, order: string) => {
//   if (sort && order) {
//     return `&_sort=${sort}&_order=${order}`;
//   }
//   return '';
// };

// export const getWinners = async ({ page, limit = 10, sort, order }) => {
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

// export const getWinner = async (id: number) => (await fetch(`${WINNERS}/${id}`)).json();

// export const getWinnerStatus = async (id: number) => (await fetch(`${WINNERS}/${id}`)).status;

// export const deleteWinner = async (id: number) => (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();

// export const createWinner = async (body: IBodyWinner) =>
//   (
//     await fetch(WINNERS, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

// export const updateWinner = async (id: number, body: IBodyWinner) =>
//   (
//     await fetch(`${WINNERS}/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

// export const saveWinner = async (id: number, time: number) => {
//   const winnerStatus = await getWinnerStatus(id);

//   if (winnerStatus === HTTPStatusCode.NOT_FOUND) {
//     await createWinner({
//       id,
//       wins: 1,
//       time,
//     });
//   } else {
//     const winner = await getWinner(id);
//     await updateWinner(id, {
//       id,
//       wins: winner.wins + 1,
//       time: time < winner.time ? time : winner.time
//     });
//   }
// }
