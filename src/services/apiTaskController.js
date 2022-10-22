import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const taskController = {
  list() {
    return axios.get(baseUrl + "/tasks/list").catch((error) => {
      return error.response;
    });
  },
};
