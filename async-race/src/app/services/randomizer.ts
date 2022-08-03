import { ARR_CAR_MODEL } from '../const/colors';

export class Randomizer {
  randomTitleCar() {
    const randomTitle = ARR_CAR_MODEL[Math.floor(Math.random() * ARR_CAR_MODEL.length)];
    return randomTitle;
  }

  randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  generatorRandom() {
    return [this.randomTitleCar(), this.randomColor()];
  }
}
