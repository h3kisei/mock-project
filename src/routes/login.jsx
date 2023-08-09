import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "../components/FormikField";
import { useDispatch } from "react-redux";
import "../styles/login.scss";
import { login } from "../redux/actions/authActions";
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                      <FormikField
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <button style={{ display: "block" }} onClick={onClose}>
                        submit
                      </button>
                    </div>
                    <div className="pre">
                      <pre>{JSON.stringify(formik, null, 4)}</pre>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
