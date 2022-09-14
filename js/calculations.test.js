import { cubicVolume } from "./calculations.js";

const cubicVolumesArray = [
  [5, 5, 5, 125],
  [0, 0, 0, false],
  [0, -10, 0, false],
];

test.each(cubicVolumesArray)(
  "returns correct cubicVolume without running into negative numbers",
  (number1, number2, number3, result) => {
    expect(cubicVolume(number1, number2, number3)).toBe(result);
  }
);
