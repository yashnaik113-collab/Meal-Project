import axios from "axios";
const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(
        new Error("MealsOnTheWay backend is not reachable. Please make sure the backend server is running on port 5000.")
      );
    }

    return Promise.reject(error);
  }
);

export default httpClient;
