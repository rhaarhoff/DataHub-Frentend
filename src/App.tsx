import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HaloPSA from './pages/HaloPSA';
import QuickBooks from './pages/QuickBooks';
import MicrosoftGraph from './pages/MicrosoftGraph';
import ITGlue from './pages/ITGlue';
import logo from './assets/logo.png';
import AppHeader from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './components/AuthContext'; // Import AuthContext
import ProtectedRoute from './components/ProtectedRoute'; // Use ProtectedRoute
import Login from './pages/Login'; // A new login page component

const { Content, Sider } = Layout;

interface AppProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const AppLayout: React.FC<AppProps> = ({ setIsDarkMode, isDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const { token } = theme.useToken();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'halopsa':
        return <HaloPSA />;
      case 'quickbooks':
        return <QuickBooks />;
      case 'microsoftgraph':
        return <MicrosoftGraph />;
      case 'itglue':
        return <ITGlue />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: token.colorBgBase }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
        style={{ backgroundColor: token.colorBgContainer }}
      >
        <div className="logo" style={{ padding: collapsed ? '8px' : '16px', transition: 'padding 0.3s ease' }}>
          <img src={logo} alt="Yolo Telecom" style={{ width: '70%', transition: 'padding 0.3s ease' }} />
        </div>
        <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: token.colorBgBase }}>
        <AppHeader setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Content style={{ margin: '16px', background: token.colorBgContainer, padding: 24 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderContent()}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

const App: React.FC<AppProps> = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppLayout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/halopsa"
          element={
            <ProtectedRoute>
              <HaloPSA />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quickbooks"
          element={
            <ProtectedRoute>
              <QuickBooks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/microsoftgraph"
          element={
            <ProtectedRoute>
              <MicrosoftGraph />
            </ProtectedRoute>
          }
        />
        <Route
          path="/itglue"
          element={
            <ProtectedRoute>
              <ITGlue />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown routes to the dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
