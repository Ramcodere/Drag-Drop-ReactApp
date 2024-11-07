
import React from 'react';

function Element({ element }) {
  const style = {
    padding: '10px',
    margin: '5px',
    border: '1px solid black',
    backgroundColor: 'lightgrey',
    cursor: 'pointer',
  };

  switch (element.type) {
    case 'text':
      return <div style={style}>Sample Text</div>;
    case 'image':
      return <div style={style}>Image Placeholder</div>;
    case 'button':
      return <button style={style}>Button</button>;
    default:
      return null;
  }
}

export default Element;
