// import { HTTPStatusCode } from '../types/http-status-codes';
import { path } from '../const/api-const';
import { Storage } from '../storage/storage';
import { IObjString, IStorageItem } from '../types/storage-types';
import { editComponent, itemsComponent } from '../view/garage/page-garage';

const GARAGE_LIMIT = 7;
// const WINNERS_LIMIT = 10;

const URL = 'http://127.0.0.1:3000';

const GARAGE = `${URL}/garage`;

export class ApiGarage {
  async getCars(page: number, limit = GARAGE_LIMIT) {
    try {
      const response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
      Storage.cars = (await response.json()) as IStorageItem[];
      Storage.carsCount = Number(response.headers.get('X-Total-Count'));
      // return objGetCars;
      // return {
      //   items: (await response.json()) as IStorageItem[],
      //   count: response.headers.get('X-Total-Count'),
      // };
      console.log(Storage.cars);
      editComponent.renderTitle(Storage.carsCount);
      itemsComponent.drawItems(Storage.cars);
    } catch (err) {
      console.log('This is CATCH Error -->', err);
    }
  }

  async createCar(body: IObjString) {
    await (
      await fetch(GARAGE, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number) {
    await (await fetch(`${GARAGE}/${id}`, { method: 'DELETE' })).json();
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
}
