import React from 'react';
import { Card, Typography, theme } from 'antd';

const { Title, Paragraph } = Typography;

const Settings: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Card
      title="QuickBooks Settings"
      bordered={false}
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextBase,
        padding: '24px',
      }}
    >
      <Title level={2}>QuickBooks Settings</Title>
      <Paragraph>
        Manage QuickBooks API credentials and sync settings here.
      </Paragraph>
      {/* Add settings form or API key management component */}
    </Card>
  );
};

export default Settings;
