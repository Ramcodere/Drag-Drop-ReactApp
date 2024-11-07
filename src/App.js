

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import EditorPage from './pages/EditorPage';
// import TemplateListPage from './pages/TemplateListPage';
// import CanvasProvider from './context/CanvasContext';
// import GlobalStyles from './styles/GlobalStyles';

// function App() {
//   return (
//     <CanvasProvider>
//       <Router>
//         <GlobalStyles />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/editor" element={<EditorPage />} />
//           <Route path="/templates" element={<TemplateListPage />} />
//           <Route path="/editor/:templateId" element={<EditorPage />} /> {/* For editing specific templates */}
//         </Routes>
//       </Router>
//     </CanvasProvider>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import TemplateListPage from './pages/TemplateListPage';
import CanvasProvider from './context/CanvasContext';
import GlobalStyles from './styles/GlobalStyles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <CanvasProvider>
      <Router>
        <GlobalStyles />
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/templates" element={<TemplateListPage />} />
            <Route path="/editor/:templateId" element={<EditorPage />} /> {/* For editing specific templates */}
          </Routes>
        </DndProvider>
      </Router>
    </CanvasProvider>
  );
}

export default App;
