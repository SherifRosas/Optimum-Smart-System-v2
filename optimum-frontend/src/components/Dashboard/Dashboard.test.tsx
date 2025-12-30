import { useAuthStore } from '@/stores/authStore';

// Simple test Dashboard to verify rendering
export function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        zIndex: 9999,
        padding: '20px',
        color: '#000000',
        fontSize: '24px',
        fontWeight: 'bold'
      }}
    >
      <h1 style={{ color: '#000000', fontSize: '32px', marginBottom: '20px' }}>
        DASHBOARD IS RENDERING!
      </h1>
      <p style={{ color: '#000000', fontSize: '18px' }}>
        User: {user?.username || 'Not logged in'}
      </p>
      <p style={{ color: '#000000', fontSize: '18px' }}>
        If you see this, the component is working!
      </p>
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ color: '#000000' }}>Stats:</h2>
        <p>Total Orders: 0</p>
        <p>Pending: 0</p>
        <p>Processing: 0</p>
        <p>Completed: 0</p>
      </div>
    </div>
  );
}

