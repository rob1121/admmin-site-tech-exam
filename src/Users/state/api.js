import axios from "axios";

const USERS_API = "https://reqres.in/api/users";

export const getUsers = async (page) => {
  try {
    const { data } = await axios.get(`${USERS_API}?per_page=20&page=${page}`);
    return data;
  } catch (error) {
    console.error(Object.keys(error), error.message);
  }
};

export const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(`${USERS_API}/${userId}`);
    return data.data;
  } catch (error) {
    console.error(Object.keys(error), error.message);
  }
};

export const createUser = async (newUser) => {
  try {
    const { data } = await axios.post(USERS_API, newUser);
    return data;
  } catch (error) {
    console.error(Object.keys(error), error.message);
  }
};

export const updateUser = async (user) => {
  try {
    await axios.put(`${USERS_API}/${user.id}`, user);
  } catch (error) {
    console.error(Object.keys(error), error.message);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${USERS_API}/${userId}`);
  } catch (error) {
    console.error(Object.keys(error), error.message);
  }
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
