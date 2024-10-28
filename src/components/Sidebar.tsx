import React from 'react';
import { Menu, theme } from 'antd';
import { CloudOutlined, BookOutlined, UserOutlined, DesktopOutlined, AppstoreOutlined } from '@ant-design/icons';

interface SidebarProps {
  selectedMenu: string;
  onMenuSelect: (menuKey: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, onMenuSelect }) => {
  const { token } = theme.useToken(); // Access theme tokens

  // Define menu items for the sidebar
  const menuItems = [
    {
      key: 'dashboard',
      icon: <AppstoreOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'halopsa',
      icon: <CloudOutlined />,
      label: 'HaloPSA',
    },
    {
      key: 'quickbooks',
      icon: <BookOutlined />,
      label: 'QuickBooks',
    },
    {
      key: 'microsoftgraph',
      icon: <UserOutlined />,
      label: 'Microsoft Graph',
    },
    {
      key: 'itglue',
      icon: <DesktopOutlined />,
      label: 'IT Glue',
    },
  ];

  return (
    <div style={{ height: '100%', background: token.colorBgContainer }}>
      {/* The Menu component uses the `items` prop for defining menu items */}
      <Menu
        theme="dark"
        selectedKeys={[selectedMenu]}
        mode="inline"
        onClick={(e) => onMenuSelect(e.key)}
        items={menuItems}  // Passing the menu items correctly
        style={{ background: token.colorBgContainer }} // Use theme token for background
      />
    </div>
  );
};

export default Sidebar;
