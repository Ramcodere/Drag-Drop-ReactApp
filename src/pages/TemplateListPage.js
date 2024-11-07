
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TemplateListPage() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Fetch templates from API (use mock data or actual API call here)
    const fetchTemplates = async () => {
      const response = await fetch('/api/templates'); // Replace with actual API endpoint
      const data = await response.json();
      setTemplates(data);
    };

    fetchTemplates();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Templates</h2>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            <Link to={`/editor/${template.id}`}>{template.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplateListPage;

