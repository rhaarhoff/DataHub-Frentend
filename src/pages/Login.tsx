import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, Row, Col, Checkbox, App } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useAuth } from "../components/AuthContext";
import logo from "../assets/logo.png";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Use `App.useApp` to access notification with context
  const { notification } = App.useApp();

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const name = await login(values.email, values.password, rememberMe); // Capture the returned name
      notification.success({ message: `Welcome, ${name}!` }); // Display the welcome message with the user's name
    } catch (error) {
      notification.error({
        message: "Login failed",
        description: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRememberMeChange = (e: CheckboxChangeEvent) => {
    setRememberMe(e.target.checked);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh", backgroundColor: "#f0f2f5" }}>
      <Col xs={24} sm={16} md={12} lg={8}>
        <Card bordered={false} style={{ padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={logo} alt="Yolo Telecom" style={{ width: "150px", marginBottom: "20px" }} />
            <Title level={3}>Login to Your Account</Title>
            <Text type="secondary">Please enter your credentials to access the dashboard.</Text>
          </div>
          <Form onFinish={handleLogin} layout="vertical" requiredMark={false} initialValues={{ email: "", password: "", remember: false }}>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }, { type: "email", message: "Please enter a valid email!" }]} hasFeedback>
              <Input placeholder="Enter your email" aria-label="Email input" autoComplete="username" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]} hasFeedback>
              <Input.Password placeholder="Enter your password" aria-label="Password input" autoComplete="current-password" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox onChange={handleRememberMeChange}>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Text type="secondary">
                <a href="/forgot-password">Forgot Password?</a>
              </Text>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
