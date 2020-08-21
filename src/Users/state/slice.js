import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_AVATAR } from "../Users.constant";
const initialState = {
  list: {
    data: [],
  },
  selectedUser: {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers: () => {},
    fetchUsersSuccess: (state, action) => {
      state.list = action.payload;
    },
    fetchUserById: () => {},
    fetchUserByIdSuccess: (state, action) => {
      state.selectedUser = action.payload;
    },
    createUser: () => {},
    createUserSuccess: (state, action) => {
      state.list.data.push({
        ...action.payload,
        avatar: DEFAULT_AVATAR,
      });
    },
    updateUser: () => {},
    updateUserSuccess: (state, action) => {
      const updatedUser = action.payload;
      const updatedUserIndex = state.list.data.findIndex(
        ({ id }) => id === parseInt(state.selectedUser)
      );

      if (updatedUserIndex !== -1) {
        state.list.data[updatedUserIndex] = {
          ...state.list.data[updatedUserIndex],
          ...updatedUser,
        };
      }
    },
    deleteUser: () => {},
    deleteUserSuccess: (state, action) => {
      const deleteUserId = action.payload;

      state.list.data = state.list.data.filter(
        ({ id }) => id !== parseInt(deleteUserId)
      );
    },
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUserByIdSuccess,
  fetchUserById,
  createUser,
  createUserSuccess,
  updateUser,
  updateUserSuccess,
  deleteUser,
  deleteUserSuccess,
} = user.actions;

export default user.reducer;
