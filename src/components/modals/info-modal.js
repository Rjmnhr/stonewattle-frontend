import React from "react";
import { InfoCircleTwoTone } from "@ant-design/icons";

import { Modal } from "antd";
import { useState } from "react";

const InfoModal = ({ content, title }) => {
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
    <div>
      <InfoCircleTwoTone type="primary" onClick={showModal}>
        Open Modal
      </InfoCircleTwoTone>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{content}</p>
      </Modal>
    </div>
  );
};

export default InfoModal;
