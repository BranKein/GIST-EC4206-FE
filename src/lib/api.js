import axios from "axios";

export const domain = "";

export const setTokenForCookie = () => {
  const result = {
    res: false,
    uuid: ""
  };
  axios.get(
    `${domain}/cookie-based/setting`
  ).then(function(response){
    result.res = true;
    result.uuid = response.data.uuid;
  })
    .catch(function(error) {
      console.log(error);
      result.res = false;
    });

  return result
};

export const validateTokenByCookie = ( uuid ) => {
  let result = false;
  axios.get(
    `${domain}/cookie-based/validate`
  ).then(function(response){
    result = uuid === response.data.uuid;
  })
    .catch(function(error) {
      console.log(error);
      result = false;
    });

  return result
};

export const setTokenForHeader = () => {
  const result = {
    res: false,
    uuid: "",
    token: ""
  };
  axios.get(
    `${domain}/header-based/setting`
  ).then(function(response){
    result.res = true;
    result.uuid = response.data.uuid;
    result.token = response.data.token;
  })
    .catch(function(error) {
      console.log(error);
      result.res = false;
    });
  return result
};

export const validateTokenByHeader = ( userToken, uuid ) => {
  let result = false;
  axios.get(
    `${domain}/header-based/validate`,
    {
      headers: {
        Authorization: `Token ${userToken}`,
      },
    },
  ).then(function(response){
    result = uuid === response.data.uuid;
  })
    .catch(function(error) {
      console.log(error);
      result = false;
    });
  return result
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("userToken");
};
