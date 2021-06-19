import axios from "axios";

export const domain = "";

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

export const setTokenForHeader_v2 = () => {
  axios.get(
    `${domain}/header-based/setting`
  ).then(function(response) {
    return response;
  })
}

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
