export const setItem = () => {

}

export const removeLocalStorage = (pos: number, item: string) => {
  let oldHistory: any = localStorage.getItem(item)
    ? localStorage.getItem(item)
    : ["[]"];
  let history = JSON.parse(oldHistory);
  history.splice(pos, 1);
  localStorage.setItem(item, JSON.stringify(history));
}

export const getItemLocalStorage = (item: string) => {
  let oldHistory: any = localStorage.getItem(item)
      ? localStorage.getItem(item)
      : ["[]"];
    return JSON.parse(oldHistory);
}