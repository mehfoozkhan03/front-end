export const setCookiesFunc = (value) => {
  console.log(`🚀 ~ value:token in cookies function`, value);
  // console.log(`🚀 ~ value:`, value);
  let date = new Date();

  // console.log(`🚀 ~ date:before`, date);

  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  const expire = date.toUTCString();
  // console.log(`🚀 ~ date:after`, date);

  document.cookie = ` authToken=${value}; expires=${expire}`;

  const token = document.cookie.split('=')[1];

  return token ? token : '';
};

export const getCookiesFunc = () => {
  const token = document.cookie.split('=')[1];

  return token ? token : '';
  // return document.cookie;
};
