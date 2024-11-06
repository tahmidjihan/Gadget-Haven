function useLocalState(modData, name, arr) {
  if (modData == undefined) {
    const newData = localStorage.getItem(name);
    return newData;
  } else if (arr === true) {
    if (localStorage.getItem(name) !== null) {
      const data = JSON.parse(localStorage.getItem(name));
      const newData = [modData, ...data];
      const newJsonData = JSON.stringify(newData);
      return localStorage.setItem(name, newJsonData);
    } else {
      const data = JSON.stringify([modData]);
      return localStorage.setItem(name, data);
    }
  } else {
    const newData = localStorage.setItem(name, JSON.stringify(modData));
    return newData;
  }
}
export default useLocalState;
