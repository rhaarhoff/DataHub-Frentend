import React from 'react';
import { Card, Typography, theme } from 'antd';

const { Title, Paragraph } = Typography;

const Customers: React.FC = () => {
  const { token } = theme.useToken(); // Access Ant Design v5 theming tokens

  return (
    <Card
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextBase,
        padding: '24px',
        borderRadius: token.borderRadius,
      }}
    >
      <Title level={2} style={{ color: token.colorTextBase }}>
        Customers
      </Title>
      <Paragraph style={{ color: token.colorTextSecondary }}>
        View and manage customers from QuickBooks.
      </Paragraph>
      {/* Implement customer management functionality */}
    </Card>
  );
};

export default Customers;
