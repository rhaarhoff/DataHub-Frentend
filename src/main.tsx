import React, { useState, useEffect } from 'react';
import { ConfigProvider, App as AntApp } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { lightThemeConfig, darkThemeConfig } from './themeConfig';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ?? 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const currentThemeConfig = isDarkMode ? darkThemeConfig : lightThemeConfig;

  return (
    <React.StrictMode>
      <Router>
        <ConfigProvider theme={currentThemeConfig}>
          <AntApp>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <App isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </ErrorBoundary>
          </AntApp>
        </ConfigProvider>
      </Router>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
