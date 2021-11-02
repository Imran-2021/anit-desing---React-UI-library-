import React, { useState } from 'react';
import { Modal } from 'antd';
import { FaEdit} from "react-icons/fa";
import {
    Form,
    Input,
  } from 'antd';
const Modall = ({name,phone, website, email}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size ,}) => {
      setComponentSize(size);
    };
   
  return (
    <>
      <p onClick={showModal} style={{ fontSize: '26px', color: '#694545',cursor:"pointer" }}><FaEdit/></p>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        
      >
        <Form.Item label="Name">
          <Input value={name} />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={email} />
        </Form.Item>
        <Form.Item label="Phone">
          <Input value={phone}/>
        </Form.Item>
        <Form.Item label="Website">
          <Input value={website}/>
        </Form.Item>
      </Form>
      </Modal>
    </>
  );
};

export default Modall;