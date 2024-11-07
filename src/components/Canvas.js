
import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import Element from './Element';
import { CanvasContext } from '../context/CanvasContext';

function Canvas() {
  const { elements, addElement } = useContext(CanvasContext);

  const [, dropRef] = useDrop({
    accept: ['text', 'image', 'button'],
    drop: (item) => addElement(item.type),
  });

  return (
    <div
      ref={dropRef}
      style={{
        flex: 1,
        minHeight: '500px',
        padding: '10px',
        border: '2px dashed #ccc',
        backgroundColor: '#f8f8f8',
      }}
    >
      {elements.map((element) => (
        <Element key={element.id} element={element} />
      ))}
    </div>
  );
}

export default Canvas;
