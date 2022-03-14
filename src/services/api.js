import axios from "axios";
const url = "https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772";
const config = {
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // },
};
// axios.defaults.baseURL = url;
class Api {
  async getCards(payload) {
    const { data } = await axios.get(url, config);
    return data;
  }
}

export const api = new Api();
