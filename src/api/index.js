import axios from "axios";
import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";
import { getFormBody } from "./../utils";

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

export async function getSingleUser(user_id) {
  const url = API_URLS.getUser(user_id);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("op of user api", data);
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

export async function getUserByName(text) {
  const url = API_URLS.getUserByName(text);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("op of user name search api", data);
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

export async function login_axios(email, password) {
  const url = API_URLS.login();

  var body = {
    email: "rahul@gmail.com",
    password: "1111",
  };
  axios({
    method: "post",
    url: url,
    data: {
      email: "rahul@gmail.com",
      password: "1111",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response) {
      console.log("response from axios", response);
    })
    .catch(function (error) {
      console.log(error.response.data);
      console.log(error);
    });
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

// update user
export async function update(user_id, password, name) {
  const url = API_URLS.update(user_id);
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ password, name }),
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
