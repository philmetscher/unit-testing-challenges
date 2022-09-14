function greet(name) {
  switch (name) {
    case "Stefan":
    case "Felix":
    case "Thomas":
      return "Howdy Coach";
    case "Dalia":
      return "Howdy Boss";
    default:
      return `Howdy ${name}`;
  }
}

export { greet };
