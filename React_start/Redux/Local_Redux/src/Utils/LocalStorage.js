const tokenKey = 'token';

export const saveData = (token) => {
  let data = localStorage.setItem(tokenKey, token);
  console.log(`🚀 ~ data:`, data);
};

export const getData = () => {
  return localStorage.getItem(tokenKey);
};
