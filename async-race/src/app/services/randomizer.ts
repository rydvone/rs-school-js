export class Randomizer {
  randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  randomTitleCar() {
    const randomTitle = Math.floor(Math.random() * 16777215).toString(16);
    return randomTitle;
  }
} 