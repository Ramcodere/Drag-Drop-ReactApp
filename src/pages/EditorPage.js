
import React from 'react';
import Canvas from '../components/Canvas';
import Toolbox from '../components/Toolbox';
import ConfigPanel from '../components/ConfigPanel';

function EditorPage() {
  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <Toolbox />
      <Canvas />
      <ConfigPanel />
    </div>
  );
}

export default EditorPage;
