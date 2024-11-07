
import React from 'react';
import { useDrag } from 'react-dnd';

const elements = [
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
  { type: 'button', label: 'Button' },
];

function Toolbox() {
  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>Toolbox</h3>
      {elements.map((element) => (
        <DraggableElement key={element.type} element={element} />
      ))}
    </div>
  );
}

function DraggableElement({ element }) {
  const [, dragRef] = useDrag({
    type: element.type,
    item: { type: element.type },
  });

  return (
    <div ref={dragRef} style={{ padding: '10px', margin: '5px', border: '1px solid black' }}>
      {element.label}
    </div>
  );
}

export default Toolbox;
