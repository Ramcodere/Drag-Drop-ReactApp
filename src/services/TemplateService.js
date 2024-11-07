
export const getTemplates = async () => {
    try {
      const response = await fetch('/api/templates'); // Replace with your actual endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching templates:', error);
      throw error;
    }
  };
  
  export const saveTemplate = async (template) => {
    try {
      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(template),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving template:', error);
      throw error;
    }
  };
  
  export const updateTemplate = async (id, template) => {
    try {
      const response = await fetch(`/api/templates/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(template),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating template:', error);
      throw error;
    }
  };
  