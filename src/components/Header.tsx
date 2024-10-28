import React, { useState } from "react";
import { Layout, Avatar, Badge, Switch, Dropdown, MenuProps, theme } from "antd";
import { BellOutlined, UserOutlined, LogoutOutlined, SettingOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useAuth } from "../components/AuthContext";
import SettingsModal from "./SettingsModal"; // Import the new component

const Header: React.FC<{ isDarkMode: boolean, setIsDarkMode: (checked: boolean) => void }> = ({ isDarkMode, setIsDarkMode }) => {
  const { token } = theme.useToken();
  const { logout } = useAuth();
  
  const [isModalOpen, setIsModalOpen] = useState(false); // Update state to use 'isModalOpen'

  const toggleTheme = (checked: boolean) => {
    setIsDarkMode(checked);
    const themeMode = checked ? "dark" : "light";
    document.body.setAttribute("data-theme", themeMode);
    localStorage.setItem("theme", themeMode);
  };

  const handleSettingsClick = () => {
    setIsModalOpen(true); // Show the modal when settings is clicked
  };

  const userMenuItems: MenuProps['items'] = [
    { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
    { key: 'settings', label: 'Settings', icon: <SettingOutlined />, onClick: handleSettingsClick }, // Open modal on settings click
    { key: 'logout', label: 'Logout', icon: <LogoutOutlined />, onClick: logout },
  ];

  const notificationsMenuItems: MenuProps['items'] = [
    { key: '1', label: 'New Sync Completed' },
    { key: '2', label: 'Error in QuickBooks Sync' },
  ];

  return (
    <>
      <Layout.Header
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: token.colorBgContainer,
        }}
      >
        <div className="logo">Yolo DataHub</div>
        <div className="right-menu" style={{ display: "flex", alignItems: "center" }}>
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            onChange={toggleTheme}
            checked={isDarkMode}
            style={{ marginRight: "20px" }}
          />
          <Dropdown menu={{ items: notificationsMenuItems }} trigger={["click"]}>
            <Badge count={5}>
              <BellOutlined className="icon" style={{ fontSize: "1.5rem", marginRight: "20px" }} />
            </Badge>
          </Dropdown>
          <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
            <Avatar icon={<UserOutlined />} className="avatar" style={{ cursor: "pointer" }} />
          </Dropdown>
        </div>
      </Layout.Header>

      {/* Render the SettingsModal with 'open' prop instead of 'visible' */}
      <SettingsModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
