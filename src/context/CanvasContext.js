

import React, { createContext, useState } from 'react';

// Create a new context for the canvas state
export const CanvasContext = createContext();

function CanvasProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  // Function to add a new element to the canvas
  const addElement = (type) => {
    const id = elements.length + 1;
    setElements([
      ...elements,
      { id, type, content: '', fontSize: 16, color: '#000000' },
    ]);
  };

  // Function to update properties of an element
  const updateElement = (id, updates) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...updates } : el)));
  };

  // Function to select an element on the canvas
  const selectElement = (id) => {
    const element = elements.find((el) => el.id === id);
    setSelectedElement(element);
  };

  return (
    <CanvasContext.Provider
      value={{
        elements,
        addElement,
        selectedElement,
        setSelectedElement: selectElement,
        updateElement,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

export default CanvasProvider;
