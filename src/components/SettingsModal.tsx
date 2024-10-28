import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Use the AuthContext to get user details

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const { token, userId } = useAuth(); // Use userId and token from AuthContext
  const [loading, setLoading] = useState(false);

  // Fetch user profile when the modal opens
  useEffect(() => {
    if (open && token && userId) {
      form.resetFields(); // Clear form before fetching user data
      // Fetch the user's profile from the user service
      const fetchUserProfile = async () => {
        try {
          const { data } = await axios.get(`/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          form.setFieldsValue(data); // Populate the form with user data
        } catch (error) {
          console.error('Failed to fetch profile:', error);
          notification.error({ message: 'Failed to load profile data' });
        }
      };

      fetchUserProfile();
    }
  }, [open, token, userId, form]);

  // Handle saving profile updates
  const handleSave = async (values: any) => {
    setLoading(true);
    try {
      // Update the user profile
      await axios.patch(`/user/${userId}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notification.success({ message: 'Profile updated successfully' });
      onClose(); // Close modal after success
    } catch (error) {
      notification.error({ message: 'Failed to update profile' });
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  // Reset form fields when the modal is canceled
  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="User Settings"
      open={open}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Form.Item
          name="profileImageUrl"
          label="Profile Image URL"
        >
          <Input placeholder="Enter the URL for your profile image" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SettingsModal;
