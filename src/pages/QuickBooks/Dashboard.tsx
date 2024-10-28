import React from 'react';
import { Card, theme, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Dashboard: React.FC = () => {
  const { token } = theme.useToken(); // Ant Design v5 theming

  return (
    <Card
      title={<Title level={2} style={{ color: token.colorText }}>QuickBooks Dashboard</Title>}
      bordered={false}
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextBase,
      }}
    >
      <Paragraph style={{ color: token.colorTextSecondary }}>
        Welcome to the QuickBooks Dashboard. Here you can monitor the status of your QuickBooks integration, view sync history, and perform quick actions.
      </Paragraph>
    </Card>
  );
};

export default Dashboard;
