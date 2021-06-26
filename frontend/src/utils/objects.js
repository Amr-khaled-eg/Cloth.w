export const incluedsAnObject = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === item.name && item.size === arr[i].size) {
      return i;
    }
  }
  return -1;
};
export const removeObjFromArr = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i].name === item.name && arr[i].size === item.size)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
