import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";
import { getFormBody } from "./../utils";

//common api fetch method
// const customFetch = async (url, { body, ...customConfig }) => {
//   const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

//   const headers = {
//     "content-type": "application/json",
//     Accept: "application/json",
//   };

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   const config = {
//     ...customConfig,
//     headers: {
//       ...headers,
//       ...customConfig.headers,
//     },
//   };

//   if (body) {
//     config.body = JSON.stringify(body);
//   }
//   console.log(config.body);
//   try {
//     const response = await fetch(url, config);
//     console.log(`url is ${url}`);
//     const data = await response.json();
//     console.log(`data is ${response}`);
//     if (data.success) {
//       return {
//         data: data.data,
//         success: true,
//       };
//     }

//     throw new Error(data.message);
//   } catch (error) {
//     console.error("error");
//     return {
//       message: error.message,
//       success: false,
//     };
//   }
// };

// get all user
// export const getusers = () => {
//   return customFetch(API_URLS.getAllUsers(), {
//     method: "GET",
//   });
// };

export async function getusers() {
  const url = API_URLS.getAllUsers();
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
}

// login user
// export const login = (email, password) => {
//   return customFetch(API_URLS.login(), {
//     method: "POST",
//     body: { email, password },
//   });
// };

export async function login(email, password) {
  const url = API_URLS.login();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
}

export async function signIn(email, password, confirm_password, name) {
  const url = API_URLS.signIn();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password, confirm_password, name }),
    });
    const data = await response.json();
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
}
