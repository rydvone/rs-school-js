import { storage } from '../storage/storage';
import { IStartDrive } from '../types/storage-types';
import { buttonEditControl } from '../view/garage/edit';
import { buttonEditEdit } from '../view/garage/page-garage';
import { apiWinners } from './services';

const INACTIVE = 'inactive';

export class RaceCars {
  inactiveComponent() {
    buttonEditEdit.element.create.element.classList.add(INACTIVE);
    buttonEditEdit.element.update.element.classList.add(INACTIVE);
    buttonEditControl.element.generator.element.classList.add(INACTIVE);
    buttonEditControl.element.start.element.classList.add(INACTIVE);
  }

  activeComponent() {
    buttonEditEdit.element.create.element.classList.remove(INACTIVE);
    buttonEditEdit.element.update.element.classList.remove(INACTIVE);
    buttonEditControl.element.generator.element.classList.remove(INACTIVE);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async race(action: (arg0: number) => any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const carsOnPage = storage.cars.map(({ id }) => action(id));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const winner = await this.raceAll(
      carsOnPage,
      storage.cars.map((el) => el.id)
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return winner;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async raceAll(promises: any[], ids: number[]): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { success, id, time } = await Promise.race(promises);
    if (!success) {
      const failedIndex = ids.findIndex((ind) => ind === id);
      const restPromises = [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...promises.slice(0, failedIndex),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...promises.slice(failedIndex + 1, promises.length),
      ];
      const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return this.raceAll(restPromises, restIds);
    }

    return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
  }

  async startDrive(id: number): Promise<IStartDrive> {
    const startButton = document.getElementById(`start-single-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`stop-single-${id}`) as HTMLButtonElement;

    startButton.disabled = true;
    stopButton.disabled = false;
    this.inactiveComponent();
    const { velocity, distance } = await apiWinners.startEngine(id);
    const time = Math.round(distance / velocity);

    const car = document.getElementById(`item__car-${id}`);
    const track = document.getElementById(`track-${id}`);
    if (track === null || car === null) {
      throw new Error('No track with this ID');
    }
    const trackDistance = parseInt(getComputedStyle(track).width, 10);

    storage.animation[id] = this.animation(car, trackDistance, time);

    const { success } = await apiWinners.driveEngine(id);
    if (!success) window.cancelAnimationFrame(storage.animation[id].id);
    startButton.disabled = false;

    this.activeComponent();
    return { success, id, time };
  }

  async stopDrive(id: number) {
    const stopButton = document.getElementById(`stop-single-${id}`) as HTMLButtonElement;
    const startButton = document.getElementById(`start-single-${id}`) as HTMLButtonElement;

    stopButton.disabled = true;
    await apiWinners.stopEngine(id);

    const car = document.getElementById(`item__car-${id}`);
    if (car === null) {
      throw new Error('No car with this ID');
    }
    car.style.transform = `translateX(0)`;
    if (storage.animation[id]) window.cancelAnimationFrame(storage.animation[id].id);
    startButton.disabled = false;
    buttonEditControl.element.start.element.classList.remove(INACTIVE);
  }

  animation(car: HTMLElement, distance: number, animationTime: number) {
    let start: number | null = null;
    const state: { [k: string]: number } = {};

    function step(timestap: number) {
      if (!start) {
        start = timestap;
      }
      const time = timestap - start;
      const passed = Math.round(time * (distance / animationTime));
      car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
      if (passed < distance) {
        state.id = window.requestAnimationFrame(step);
      }
    }
    state.id = window.requestAnimationFrame(step);

    return state;
  }

  // race(action: TFuncRace) {
  //   return storage.cars.map(({ id }) => action(id));
  //   const carsOnPage = storage.cars.map(({ id }) => action(id));
  //   const winner = await this.raceAll(
  //     carsOnPage,
  //     storage.cars.map((el) => el.id)
  //   );
  //   return winner;
  // }

  // async raceAll(promises: TFuncRace, ids: number[]) {
  //   const { success, id, time } = await Promise.race(promises);
  //   if (!success) {
  //     const failedIndex = ids.findIndex((ind) => (ind = id));
  //     const restPromises = [
  //       ...promises.slice(0, failedIndex),
  //       ...promises.slice(failedIndex + 1, promises.length),
  //     ];
  //     const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
  //     return this.raceAll(restPromises, restIds);
  //   }

  //   return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
  // }

  // async race(action: TFuncRace, ids: number[] = []): Promise<IFuncRace> {
  //   // return storage.cars.map(({ id }) => action(id));
  //   if (ids.length === 0) {
  //     ids = storage.cars.map((el) => el.id);
  //   }

  //   const carsOnPage = storage.cars.map(({ id }) => action(id));
  //   const { success, id, time } = await Promise.race(carsOnPage);
  //   // const winner = await this.raceAll(
  //   //   carsOnPage,
  //   //   storage.cars.map((el) => el.id)
  //   // );
  //   // return winner;
  //   if (!success) {
  //     const failedIndex = ids.findIndex((ind) => (ind = id));
  //     const restPromises = [
  //       ...carsOnPage.slice(0, failedIndex),
  //       ...carsOnPage.slice(failedIndex + 1, carsOnPage.length),
  //     ];
  //     const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
  //     return this.race(restPromises, restIds);
  //   }
  //   const carsR = storage.cars.find((el) => el.id === id) as IStorageItem;
  //   const timeR = Number((time / 1000).toFixed(2));

  //   return { carsR, timeR };
  //   // return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
  // }

  // async raceAll(promises: TFuncRace, ids: number[]) {
  //   const { success, id, time } = await Promise.race(promises);
  //   // if (!success) {
  //   //   const failedIndex = ids.findIndex((ind) => (ind = id));
  //   //   const restPromises = [
  //   //     ...promises.slice(0, failedIndex),
  //   //     ...promises.slice(failedIndex + 1, promises.length),
  //   //   ];
  //   //   const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
  //   //   return this.raceAll(restPromises, restIds);
  //   // }

  //   return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
  // }
}

// race(action: TFuncRace) {
// return storage.cars.map(({ id }) => action(id));
// const carsOnPage = storage.cars.map(({ id }) => action(id));
// const winner = await this.raceAll(
//   carsOnPage,
//   storage.cars.map((el) => el.id)
// );
// return winner;
// }

// async raceAll(promises: TFuncRace, ids: number[]) {
//   const { success, id, time } = await Promise.race(promises);
//   // if (!success) {
//   //   const failedIndex = ids.findIndex((ind) => (ind = id));
//   //   const restPromises = [
//   //     ...promises.slice(0, failedIndex),
//   //     ...promises.slice(failedIndex + 1, promises.length),
//   //   ];
//   //   const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
//   //   return this.raceAll(restPromises, restIds);
//   // }

//   return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
// }
