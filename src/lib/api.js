import axios from "axios";

export const domain = "";

export const setTokenForCookie = () => {
  axios.get(
    `${domain}/cookie-based/setting`
  );
};

export const validateTokenByCookie = () => {
  axios.get(
    `${domain}/cookie-based/validate`
  );
};

export const setTokenForHeader = () => {
  axios.get(
    `${domain}/header-based/setting`,
  );
};

export const validateTokenByHeader = ( userToken ) => {
  axios.get(
    `${domain}/header-based/validate`,
    {
      headers: {
        Authorization: `Token ${userToken}`,
      },
    },
  );
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("userToken");
};
