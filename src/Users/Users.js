import React from "react";
import UserTable from "./components/UserTable";
import LinkModal from "../common/LinkModal";
import "./Users.style.scss";

const Users = () => {
  return (
    <div className="user-container">
      <div className="btn-container">
        <LinkModal
          pathname="/"
          title="Back"
          noState
          icon="back"
          type="button"
        />
        <LinkModal
          pathname="/users/create"
          title="Add user"
          icon="add"
          type="button"
        />
      </div>
      <UserTable />
    </div>
  );
};

export default Users;
