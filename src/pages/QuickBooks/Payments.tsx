import React from 'react';
import { Card, Typography, theme } from 'antd';

const { Title, Paragraph } = Typography;

const Payments: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Card
      title="Payments"
      bordered={false}
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextBase,
        padding: '24px',
      }}
    >
      <Title level={2}>Payments</Title>
      <Paragraph>
        View and manage payments received via QuickBooks here.
      </Paragraph>
      {/* Implement any payment details or search filters here */}
    </Card>
  );
};

export default Payments;
