import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eece5c3ab7c244a99873d4db65227b71",
  },
});