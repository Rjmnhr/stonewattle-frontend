import React, { useState } from "react";
import { Modal } from "antd";
import SignIn from "../../sign-in/sign-in";
import LoginPage from "../../../pages/login-page";
const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <p
        className="btn btn-ghost-dark me-2 me-lg-0 p-1 m-0"
        onClick={showModal}
      >
        Log in
      </p>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <LoginPage />
      </Modal>
    </>
  );
};
export default LoginModal;
