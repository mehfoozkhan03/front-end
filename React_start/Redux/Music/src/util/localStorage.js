const tokenKey = "token";

export const saveData = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const getData = () => {
  return localStorage.getItem(tokenKey);
};
export const removeData = () => {
  localStorage.removeItem("token");
};
