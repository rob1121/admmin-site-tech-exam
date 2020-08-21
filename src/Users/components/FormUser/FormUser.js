import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Avatar, Modal, Form, Row, Col, Button } from "antd";
import Input from "../../../common/FormikInput";
import validationSchema from "./FormUser.validationSchema";
import "./FormUser.style.scss";
import { FORM_LAYOUT, FORM_WITH_AVATAR } from "./FormUser.constant";

const FormUser = ({
  ref,
  initialValues,
  isReadOnly,
  onOk,
  onCancel,
  okText,
  type,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    formRef && formRef.current && formRef.current.setValues(initialValues);
  }, [initialValues, formRef]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      validationSchema={isReadOnly ? undefined : validationSchema}
      onSubmit={(values) => {
        setLoading(true);
        onOk(values);
      }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form {...FORM_LAYOUT}>
          <Modal
            {...props}
            visible
            footer={[
              <Button key="back" onClick={onCancel}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleSubmit}
              >
                {okText}
              </Button>,
            ]}
          >
            {FORM_WITH_AVATAR.includes(type) && (
              <Row className="avatar-row">
                <Col offset={1}>
                  <Avatar src={values.avatar} size={64} />
                  <small className="user-id">ID: {values.id}</small>
                </Col>
              </Row>
            )}
            <Form.Item label="Firstname">
              <Input type="text" name="first_name" disabled={isReadOnly} />
              <small className="error">
                {touched.first_name && errors.first_name}
              </small>
            </Form.Item>

            <Form.Item label="Lastname">
              <Input type="text" name="last_name" disabled={isReadOnly} />
              <small className="error">
                {touched.last_name && errors.last_name}
              </small>
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input type="email" name="email" disabled={isReadOnly} />
              <small className="error">{touched.email && errors.email}</small>
            </Form.Item>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

FormUser.propTypes = {
  isReadOnly: PropTypes.bool,
  validationSchema: PropTypes.object,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  okText: PropTypes.string,
};

FormUser.defaultProps = {
  isReadOnly: false,
  validationSchema: undefined,
  okText: "OK",
};

export default FormUser;
