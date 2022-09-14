import { greet } from "./greeting.js";

const coachNames = [
  ["Stefan", "Howdy Coach"],
  ["Stefan", "Howdy Coach"],
  ["Stefan", "Howdy Coach"],
  ["Dalia", "Howdy Boss"],
  ["Luigi", "Howdy Luigi"],
];

test.each(coachNames)(
  "returns correct greeting for coaches, bosses & normal people",
  (name, expected) => {
    expect(greet(name)).toBe(expected);
  }
);
