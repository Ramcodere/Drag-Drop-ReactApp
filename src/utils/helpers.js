
export const generateUniqueId = () => {
    return 'id_' + Math.random().toString(36).substr(2, 9);
  };
  
  export const formatColor = (color) => {
    return color || '#000000'; // Default to black if no color is specified
  };
  
  export const validateElementContent = (content) => {
    return content && content.trim() !== ''; // Simple validation to ensure content isn't empty
  };
  