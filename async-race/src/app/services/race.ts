// import { Storage } from '../storage/storage';

// export class RaceCars {
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
