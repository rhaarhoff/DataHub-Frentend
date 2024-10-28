// src/components/ContentArea.tsx
import React from 'react';
import { theme } from 'antd';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = ({ children }) => {
  const { token } = theme.useToken(); // Access theme tokens

  return (
    <div
      className="content-area"
      style={{
        padding: '24px',
        backgroundColor: token.colorBgContainer, // Use theme token for background
        minHeight: '360px',
      }}
    >
      {children}
    </div>
  );
};

export default ContentArea;
