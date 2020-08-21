import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUserById,
  fetchUserByIdSuccess,
  createUser,
  createUserSuccess,
  updateUser,
  updateUserSuccess,
  deleteUser,
  deleteUserSuccess,
} from "./slice";
import api from "./api";
import { message } from "antd";

function* getUsers({ payload: page = 1 }) {
  try {
    const users = yield call(api.getUsers, page);
    yield put(fetchUsersSuccess(users));
  } catch (err) {
    message.error("Oops, something went wrong!");
    console.error(err, err.message);
  }
}

function* getUserById({ payload: id }) {
  try {
    yield call(api.getUserById, id);
    yield put(fetchUserByIdSuccess(id));
  } catch (err) {
    message.error("Oops, something went wrong!");
    console.error(err, err.message);
  }
}

function* handleCreateUser({ payload: { newUser, history } }) {
  try {
    const createdUser = yield call(api.createUser, newUser);
    message.success(`${newUser.first_name} added!`);
    yield put(createUserSuccess(createdUser));
    yield history.goBack();
  } catch (err) {
    message.error("Oops, something went wrong!");
    console.error(err, err.message);
  }
}

function* handleUpdateUser({ payload: { updatedUser, history } }) {
  try {
    yield call(api.updateUser, updatedUser);
    yield new Promise((r) => setTimeout(r, 2000));
    yield put(updateUserSuccess(updatedUser));
    message.success(`${updatedUser.first_name} data is updated!`);
    history.goBack();
  } catch (err) {
    message.error("Oops, something went wrong!");
    console.error(err, err.message);
  }
}

function* handleDeleteUser({ payload: { id, history } }) {
  try {
    yield call(api.deleteUser, id);
    yield put(deleteUserSuccess(id));

    message.success(`User with id of ${id} is deleted!`);
    history.goBack();
  } catch (err) {
    message.error("Oops, something went wrong!");
    console.error(err, err.message);
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsers.type, getUsers);
  yield takeLatest(fetchUserById.type, getUserById);
  yield takeLatest(createUser.type, handleCreateUser);
  yield takeLatest(updateUser.type, handleUpdateUser);
  yield takeLatest(deleteUser.type, handleDeleteUser);
}
