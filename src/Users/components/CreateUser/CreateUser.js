import React from "react";
import FormUser from "../FormUser";
import { useHistory } from "react-router-dom";
import { createUser } from "../../state/slice";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCreateUser = (values) => {
    dispatch(createUser({ newUser: values, history }));
  };

  return (
    <FormUser
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
      }}
      title="Create User"
      okText="Add user"
      onOk={handleCreateUser}
      onCancel={history.goBack}
    />
  );
};

export default CreateUser;
