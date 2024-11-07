
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Drag-and-Drop Builder</h1>
      <p>Select an option to get started:</p>
      <Link to="/editor" style={{ margin: '10px', textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Create New Template</button>
      </Link>
      <Link to="/templates" style={{ margin: '10px', textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>View Saved Templates</button>
      </Link>
    </div>
  );
}

export default HomePage;

