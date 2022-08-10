import { storage } from '../storage/storage';
// import { TFuncRace } from '../types/func-types';
// import { IStartDrive } from '../types/storage-types';
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
    buttonEditControl.element.start.element.classList.remove(INACTIVE);
  }

  async startDrive(id: number) {
    const startButton = document.getElementById(`start-single-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`stop-single-${id}`) as HTMLButtonElement;

    startButton.disabled = true;
    stopButton.disabled = false;
    this.inactiveComponent();
    const { velocity, distance } = await apiWinners.startEngine(id);
    const time = Math.round(distance / velocity);

    const car = document.getElementById(`item__car-${id}`);
    // const flag = document.getElementById(`item__flag-${id}`);
    const track = document.getElementById(`track-${id}`);
    if (track === null || car === null) {
      throw new Error('No track with this ID');
    }
    const trackDistance = parseInt(getComputedStyle(track).width, 10);

    storage.animation[id] = this.animation(car, trackDistance, time);

    const { success } = await apiWinners.driveEngine(id);
    if (!success) window.cancelAnimationFrame(storage.animation[id].id);
    // console.log(trackDistance, '  time', time, '   success:', success);
    startButton.disabled = false;
    // stopButton.disabled = true;

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

  // async race(action: TFuncRace) {
  //   const carsOnPage = storage.cars.map(({ id }) => action(id));
  //   const winner = await this.raceAll(
  //     carsOnPage,
  //     storage.cars.map((el) => el.id)
  //   );
  //   return winner;
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
