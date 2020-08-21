import React, { useEffect } from "react";
import FormUser from "../FormUser";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserById } from "../../state/slice";
import { selectActiveUser } from "../../state/selector";

const DeleteUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectActiveUser);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  const handleDeleteUser = () => {
    dispatch(deleteUser({ id, history }));
  };

  return user ? (
    <FormUser
      initialValues={{
        ...user,
      }}
      title="Delete confirmation"
      okText="Delete"
      type="delete"
      onOk={handleDeleteUser}
      onCancel={history.goBack}
      isReadOnly
    />
  ) : null;
};

export default DeleteUser;
