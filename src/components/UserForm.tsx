import React from 'react';
import { Form, Input, Button } from 'antd';
import { CreateUserDto, UpdateUserDto } from '../services/userService';

interface UserFormProps {
  user?: UpdateUserDto; // Optional for editing
  onSubmit: (values: CreateUserDto | UpdateUserDto) => void;
  loading: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, loading }) => {
  const [form] = Form.useForm();

  // Set initial form values if editing
  React.useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user, form]);

  const handleFinish = (values: CreateUserDto | UpdateUserDto) => {
    onSubmit(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input placeholder="Enter name" />
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input placeholder="Enter phone number" />
      </Form.Item>
      <Form.Item name="profileImageUrl" label="Profile Image URL">
        <Input placeholder="Enter profile image URL" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
