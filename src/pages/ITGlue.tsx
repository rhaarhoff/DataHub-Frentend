import React from 'react';
import { Layout, Breadcrumb, Card, theme } from 'antd';
import ContentArea from '../components/ContentArea'; // Using the reusable ContentArea component

const ITGluePage: React.FC = () => {
  const { token } = theme.useToken(); // Access theme tokens for consistent styling

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      {/* Breadcrumb navigation */}
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>IT Glue</Breadcrumb.Item>
      </Breadcrumb>

      <ContentArea>
        <Card
          title="IT Glue Integration"
          bordered={false}
          style={{ backgroundColor: token.colorBgContainer }} // Apply theme tokens for background
        >
          <p>
            Manage your IT Glue documentation synchronization here, ensuring all
            your business information is up-to-date.
          </p>
        </Card>
      </ContentArea>
    </Layout>
  );
};

export default ITGluePage;
