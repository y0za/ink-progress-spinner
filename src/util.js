exports.omitProperties = (obj, properties) => {
  const keys = Object.keys(obj);
  const diffKeys = keys.filter((key) => {
    return properties.indexOf(key) < 0;
  });

  const diff = {};
  for (let key of diffKeys) {
    diff[key] = obj[key];
  }

  return diff;
}
