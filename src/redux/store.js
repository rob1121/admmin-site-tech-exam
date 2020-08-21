import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devtools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(saga);

export default store;
