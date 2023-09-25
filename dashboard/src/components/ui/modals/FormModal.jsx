/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { createContext, useState } from "react";

const FormModalContext = createContext();

const FormModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  //   const handleOk = () => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       setOpen(false);
  //     }, 1000);
  //   };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.btnTitle}
      </Button>
      <Modal
        open={open}
        title={props.btnTitle}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            // onClick={handleOk}
            form={props.formId}
            htmlType="submit"
          >
            {props.btnName}
          </Button>,
        ]}
      >
        <FormModalContext.Provider value={{ loading, setLoading, setOpen }}>
          {props.children}
        </FormModalContext.Provider>
      </Modal>
    </>
  );
};
export default FormModal;
export { FormModalContext };
