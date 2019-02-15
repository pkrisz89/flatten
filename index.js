const flatten = (obj, previousKey) =>
  Object.keys(obj).reduce((acc, curr) => {
    const newKey = previousKey ? `${previousKey}.${curr}` : curr;
    if (typeof obj[curr] !== "object") {
      return { ...acc, [newKey]: obj[curr] };
    }
    return flatten(obj[curr], newKey);
  }, {});

module.exports = flatten;
