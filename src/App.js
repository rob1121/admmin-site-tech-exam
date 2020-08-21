import React from "react";

import { Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./HomePage";
import Users from "./Users";
import "antd/dist/antd.css";
import CreateUser from "./Users/components/CreateUser";
import EditUser from "./Users/components/EditUser";
import DeleteUser from "./Users/components/DeleteUser";

const history = createBrowserHistory();
const Pages = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/users`} component={Users} />
        <Route exact path={`/users/create`} component={CreateUser} />
        <Route exact path={`/users/:id/edit`} component={EditUser} />
        <Route exact path={`/users/:id/delete`} component={DeleteUser} />
      </Switch>

      {background && <Route path={`/users/create`} children={<CreateUser />} />}
      {background && <Route path={`/users/:id/edit`} children={<EditUser />} />}
      {background && (
        <Route path={`/users/:id/delete`} children={<DeleteUser />} />
      )}
    </>
  );
};

const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <React.Suspense fallback={<div>404 page</div>}>
          <Pages />
        </React.Suspense>
      </Provider>
    </Router>
  );
};

export default App;
