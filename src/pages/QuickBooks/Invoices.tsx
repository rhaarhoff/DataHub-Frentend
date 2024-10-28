import React from 'react';
import { Card, Typography, theme } from 'antd';

const { Title, Paragraph } = Typography;

const Invoices: React.FC = () => {
  const { token } = theme.useToken(); // Ant Design v5 theming

  return (
    <Card
      title="Invoices"
      bordered={false}
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextBase,
        padding: '24px',
      }}
    >
      <Title level={2}>Invoices</Title>
      <Paragraph>
        Manage and view your QuickBooks invoices here. You can view, edit, or add new invoices as needed.
      </Paragraph>
      {/* You can implement an Ant Design Table or Pagination component for invoices here */}
    </Card>
  );
};

export default Invoices;
