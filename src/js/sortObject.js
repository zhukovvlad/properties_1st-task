export default function sortObjectProperties(object, array) {
  const result = [];

  let arrayOfKeys = Object
    .keys(object)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      return -1;
    });

  for (const element of array) {
    arrayOfKeys.splice(arrayOfKeys.indexOf(element), 1);
  }

  arrayOfKeys = array.concat(arrayOfKeys);

  for (const element of arrayOfKeys) {
    result.push({ key: element, value: object[element] });
  }
  return result;
}
