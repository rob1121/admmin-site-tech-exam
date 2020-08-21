import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.user;

export const selectUserList = createSelector(
  [selectUser],
  (state) => state.list
);

export const selectActiveUser = createSelector([selectUser], (state) =>
  state.list.data.find(({ id }) => id === parseInt(state.selectedUser))
);
