import React from 'react';
import { Layout, Breadcrumb, Card, theme } from 'antd';
import ContentArea from '../components/ContentArea';

const HaloPSAPage: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>HaloPSA</Breadcrumb.Item>
      </Breadcrumb>
      <ContentArea>
        <Card
          title="HaloPSA Integration"
          bordered={false}
          style={{ backgroundColor: token.colorBgContainer }}
        >
          <p>Content related to HaloPSA integration goes here.</p>
        </Card>
      </ContentArea>
    </Layout>
  );
};

export default HaloPSAPage;
