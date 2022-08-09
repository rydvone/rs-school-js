// import { storage } from '../storage/storage';
// import { apiWinners } from './services';

// export class RaceCars {
//   async startDrive(id: number, el: HTMLButtonElement) {
//     // const startButton = document.getElementById(`start-engine-car-${id}`);
//     el.disabled = true;
//     // startButton?.classList.toggle('enabling', true);

//     const { velocity, distance } = await apiWinners.startEngine(id);
//     const time = Math.round(distance / velocity);

//     // startButton?.classList('enabling', false);
//     el.disabled = false;

//     const car = document.getElementById(`car-${id}`);
//     const flag = document.getElementById(`flag-${id}`);
//     const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag));

//     store.animation[id] = animation(car, htmlDistance, time);

//     const { success } = await drive(id);
//     if (!success) window.cancelAnimationFrame(store.animation[id].id);

//     return { success, id, time };
//   }

//   animation(car: HTMLElement, distance, animationTime) {
//     let start = null;
//     const state = {};

//     function step(timestap) {
//       if (!start) {
//         start = timestap;
//       }
//       const time = timestap - start;
//       const passed = Math.round(time * (distance / animationTime));

//       car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

//       if (passed < distance) {
//         state.id = window.requestAnimationFrame(step);
//       }
//     }
//     state.id = window.requestAnimationFrame(step);

//     return state;
//   }

//   async race(action) {
//     const pageArray = Storage.cars.map(({ id }) => action(id));
//     const winner = await this.raceAll(
//       pageArray,
//       Storage.cars.map((el) => el.id)
//     );
//     return winner;
//   }

//   async raceAll(promises: Promise, ids: number[]) {
//     const { success, id, time } = await Promise.race(promises);
//     if (!success) {
//       const failedIndex = ids.findIndex((ind) => (ind = id));
//       const restPromises = [
//         ...promises.slice(0, failedIndex),
//         ...promises.slice(failedIndex + 1, promises.length),
//       ];
//       const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
//       return this.raceAll(restPromises, restIds);
//     }
//     return { ...Storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
//   }
// }
