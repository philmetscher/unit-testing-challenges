import { checkTeenagerStatus } from "./teenager.js";

const checkAges = [
  [15, true],
  [20, true],
  [21, false],
  [13, true],
  [10, false],
];

test.each(checkAges)(
  "returns correct teenager status",
  (number, isTeenager) => {
    expect(checkTeenagerStatus(number)).toBe(isTeenager);
  }
);
