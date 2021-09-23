export * from "./constants"; //will import all named exports from the file nad create a object to export it

// set token to local storage
export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("cannot store key in LocalStorage");
  }
  const valueToStore =
    typeof value !== "string" ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
  localStorage.setItem("setupTime", new Date().getTime());
};

// get token from local storage
export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("cannot get key from  LocalStorage");
  }

  var now = new Date().getTime();
  var setupTime = localStorage.getItem("setupTime");

  if (now - setupTime > 7 * 60 * 60 * 1000) {
    localStorage.removeItem(key);
    localStorage.removeItem("setupTime");
  }
  return localStorage.getItem(key);
};
// remove token from local storage
export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("cannot delete key from storeLocalStorage");
  }
  localStorage.removeItem(key);
  localStorage.removeItem("setupTime");
};
