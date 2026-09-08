/* const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${citys.value.trim()}&appid=${api_key}`;
 */

import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;

export { Api, api_key };
