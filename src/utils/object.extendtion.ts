const getPropertiesFromKey = function (obj: any, keys: Array<string>) {
  const newObj = {};
  keys.forEach((key) => {
    newObj[key] = this[key];
  });
  return newObj;
};

export { getPropertiesFromKey };
