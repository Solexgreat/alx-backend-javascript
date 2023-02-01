// Accepts 2 args: a set and an array and return a boolean.

const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
};

export default hasValuesFromArray;
