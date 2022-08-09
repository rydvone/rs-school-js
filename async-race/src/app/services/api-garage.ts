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
    await (await fetch(`${path.garage}/${id}`)).json();
  }
}
