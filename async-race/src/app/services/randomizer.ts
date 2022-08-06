import { CARS_LIST } from '../const/cars-list';

const COUNT_RANDOM_CAR = 10;

export class Randomizer {
  randomTitleCar() {
    // const randomTitle = ARR_CAR_MODEL[Math.floor(Math.random() * ARR_CAR_MODEL.length)];
    const ind = Math.floor(Math.random() * CARS_LIST.length);
    const randomBrand = CARS_LIST[ind].brand;
    const randomModel =
      CARS_LIST[ind].models[Math.floor(Math.random() * CARS_LIST[ind].models.length)];
    return `${randomBrand} ${randomModel}`;
  }

  randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }

  generatorRandomSingle() {
    return [this.randomTitleCar(), this.randomColor()];
  }

  generatorRandom(val = COUNT_RANDOM_CAR) {
    return new Array(val).fill(0).map(() => [this.randomTitleCar(), this.randomColor()]);
  }
}
