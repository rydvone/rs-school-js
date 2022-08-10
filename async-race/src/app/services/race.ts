import { storage } from '../storage/storage';
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

  async startDrive(id: number, el: HTMLButtonElement) {
    // const startButton = document.getElementById(`start-engine-car-${id}`);
    el.disabled = true;
    // startButton?.classList.toggle('enabling', true);
    this.inactiveComponent();
    const { velocity, distance } = await apiWinners.startEngine(id);
    const time = Math.round(distance / velocity);

    // startButton?.classList('enabling', false);

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
    console.log(trackDistance, '  time', time, '   success:', success);

    el.disabled = false;
    this.activeComponent();
    return { success, id, time };
  }

  async stopDrive(id: number, el: HTMLButtonElement) {
    // const stopButton = document.getElementById(`stop-engine-car-${id}`);
    el.disabled = true;
    // stopButton?.classList.toggle('enabling', true);
    await apiWinners.stopEngine(id);
    // stopButton?.classList('enabling', false);
    el.disabled = false;

    const car = document.getElementById(`item__car-${id}`);
    if (car === null) {
      throw new Error('No car with this ID');
    }
    car.style.transform = `translateX(0)`;
    if (storage.animation[id]) window.cancelAnimationFrame(storage.animation[id].id);
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
}
