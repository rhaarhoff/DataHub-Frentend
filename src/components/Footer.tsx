// src/components/Footer.tsx
import React from 'react';
import { Layout } from 'antd';

const Footer: React.FC = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: 'center',
        padding: '20px 0',
      }}
    >
      Yolo DataHub ©2024 Powered by Yolo Telecoms
    </Layout.Footer>
  );
};

export default Footer;
