import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "../components/FormikField";
import { useDispatch } from "react-redux";
import "../styles/login.scss";
import { login } from "../redux/actions/authActions";
import React, { useEffect } from "react";

const Login = (onClose) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(login({ ...values, deviceId: "deviceId-hieu1x@gmail.com" }));
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div style={{ padding: 20 }}>
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <button style={{ display: "block" }}>submit</button>
            </div>
            <div className="pre">
              <pre>{JSON.stringify(formik, null, 4)}</pre>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
