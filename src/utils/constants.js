const API_ROOT = "http://localhost:5000/user/";

export const API_URLS = {
  login: () => `${API_ROOT}createSession`,
  signIn: () => `${API_ROOT}create`,
  getAllUsers: () => `${API_ROOT}getAllUser`,
  update: (user_id) => `${API_ROOT}update/${user_id}`,
  getUser: (user_id) => `${API_ROOT}getUser/${user_id}`,
};

export const LOCALSTORAGE_TOKEN_KEY = "token_key";



export function getFormBody(params) {
    let formBody = [];
  
    for (let key in params) {
      let encodedKey = encodeURIComponent(key); //user name  ==user%20name
      let encodedValue = encodeURIComponent(params[key]); //aakash 123  ==akash%20123
  
      formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&"); //"username=akash&password=1234"
  }
  