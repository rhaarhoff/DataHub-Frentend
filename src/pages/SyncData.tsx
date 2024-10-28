import React, { useState } from 'react';
import { notification, Button } from 'antd';

const SyncData: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSync = async () => {
    setLoading(true);
    try {
      // Simulate API call to trigger sync
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success notification
      notification.success({
        message: 'Sync Started',
        description: 'Your data sync has been initiated.',
        placement: 'topRight',
        duration: 3, // Automatically closes after 3 seconds
      });
    } catch (error) {
      // Show error notification
      notification.error({
        message: 'Sync Failed',
        description: 'There was an error initiating the sync. Please try again.',
        placement: 'topRight',
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Sync QuickBooks Data</h2>
      <Button type="primary" onClick={handleSync} loading={loading} disabled={loading}>
        {loading ? 'Syncing...' : 'Start Sync'}
      </Button>
    </div>
  );
};

export default SyncData;
