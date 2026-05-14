import client from "./client";

export const getUsers = (page = 1, limit = 9) => {
  return client.get("/public/randomusers", { params: { page, limit } });
};

export const getUserById = (userid) => {
  return client.get(`/public/randomusers/${userid}`);
};
