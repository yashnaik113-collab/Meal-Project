import httpClient from "../httpClient";

export const registerUser = async ({ name, email, password }) => {
  const { data } = await httpClient.post("/users/register", {
    name,
    email,
    password,
  });

  return data;
};

export const loginUser = async ({ email, password }) => {
  const { data } = await httpClient.post("/users/login", {
    email,
    password,
  });

  return data;
};
