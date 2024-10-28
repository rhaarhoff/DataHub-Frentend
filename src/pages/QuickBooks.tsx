import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { DollarOutlined, UserOutlined, FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import Dashboard from './QuickBooks/Dashboard';
import Invoices from './QuickBooks/Invoices';
import Payments from './QuickBooks/Payments';
import Customers from './QuickBooks/Customers';
import Settings from './QuickBooks/Settings';
import ContentArea from '../components/ContentArea';

const { Sider, Content } = Layout;

const QuickBooks: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const { token } = theme.useToken(); // Ant Design v5 theming

  const renderContent = () => {
    switch (selectedMenu) {
      case 'invoices':
        return <Invoices />;
      case 'payments':
        return <Payments />;
      case 'customers':
        return <Customers />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={200} style={{ backgroundColor: token.colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ height: '100%' }}
          onClick={(e) => setSelectedMenu(e.key)}
        >
          <Menu.Item key="dashboard" icon={<FileTextOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="invoices" icon={<DollarOutlined />}>
            Invoices
          </Menu.Item>
          <Menu.Item key="payments" icon={<DollarOutlined />}>
            Payments
          </Menu.Item>
          <Menu.Item key="customers" icon={<UserOutlined />}>
            Customers
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <ContentArea>
          <Content style={{ padding: '24px 24px 24px 0', margin: 0 }}>
            {renderContent()}
          </Content>
        </ContentArea>
      </Layout>
    </Layout>
  );
};

export default QuickBooks;
