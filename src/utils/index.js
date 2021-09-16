export * from "./constants"; //will import all named exports from the file nad create a object to export it

// set token to local storage
export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("cannot store i LocalStorage");
  }
  const valueToStore =
    typeof value !== "string" ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);
};

// get token from local storage
export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("cannot store i LocalStorage");
  }
  return localStorage.getItem(key);
};
// remove token from local storage
export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("cannot store i LocalStorage");
  }
  localStorage.removeItem(key);
};
