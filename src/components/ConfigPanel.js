
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CanvasContext } from '../context/CanvasContext';

function ConfigPanel() {
  const { selectedElement, updateElement } = useContext(CanvasContext);
  const { register, handleSubmit } = useForm({
    defaultValues: selectedElement,
  });

  const onSubmit = (data) => {
    updateElement(selectedElement.id, data);
  };

  if (!selectedElement) return 

  return (
    <div style={{ width: '250px', padding: '10px', borderLeft: '1px solid #ccc' }}>
      <h3>Configure Element</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Content:
          <input {...register('content')} />
        </label>
        <label>
          Font Size:
          <input type="number" {...register('fontSize')} />
        </label>
        <label>
          Color:
          <input type="color" {...register('color')} />
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default ConfigPanel;

