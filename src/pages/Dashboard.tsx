import React from 'react';
import { Card, Row, Col, theme } from 'antd';
import ContentArea from '../components/ContentArea'; // Import ContentArea

const Dashboard: React.FC = () => {
  const { token } = theme.useToken(); // Fetch the theme tokens

  return (
    <ContentArea> {/* Wrap the entire content in ContentArea */}
      <Row gutter={[16, 16]} style={{ padding: '24px' }}>
        <Col span={12}>
          <Card
            title="Sync Status"
            bordered={false}
            style={{
              backgroundColor: token.colorBgContainer,
              color: token.colorTextBase,
            }}
          >
            <p>Status: Success</p>
            <p>Last Sync: 2 hours ago</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="API Usage"
            bordered={false}
            style={{
              backgroundColor: token.colorBgContainer,
              color: token.colorTextBase,
            }}
          >
            <p>API Calls Today: 120</p>
            <p>Rate Limit: 500</p>
          </Card>
        </Col>
      </Row>
    </ContentArea>
  );
};

export default Dashboard;
