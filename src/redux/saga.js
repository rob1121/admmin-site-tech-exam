import { all, fork } from "redux-saga/effects";
import user from "../Users/state/saga";

export default function* root() {
  yield all([fork(user)]);
}
