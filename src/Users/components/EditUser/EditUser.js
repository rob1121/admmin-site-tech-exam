import React, { useEffect } from "react";
import FormUser from "../FormUser";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, fetchUserById } from "../../state/slice";
import { selectActiveUser } from "../../state/selector";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectActiveUser);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  const handleUpdateUser = (values) => {
    dispatch(updateUser({ updatedUser: values, history }));
  };
  return (
    <FormUser
      initialValues={{ ...user }}
      title="Edit user"
      okText="Update"
      onOk={handleUpdateUser}
      onCancel={history.goBack}
    />
  );
};

export default EditUser;
