import React from 'react';
import { Layout, Breadcrumb, Card, theme } from 'antd';
import ContentArea from '../components/ContentArea';

const MicrosoftGraphPage: React.FC = () => {
  const { token } = theme.useToken(); // Correct way to access token for theming

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0', color: token.colorText }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Microsoft Graph</Breadcrumb.Item>
      </Breadcrumb>
      <ContentArea>
        <Card
          title="Microsoft Graph Integration"
          bordered={false}
          style={{
            backgroundColor: token.colorBgContainer, // Apply token for background color
            color: token.colorTextBase, // Apply token for text color
          }}
        >
          <p>
            Manage your Microsoft Graph integration here. You can sync users,
            emails, calendars, and more.
          </p>
        </Card>
      </ContentArea>
    </Layout>
  );
};

export default MicrosoftGraphPage;
