// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Notes from './pages/Notes';

//import CreateNotePage from './routes/CreateNotePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/notas" element={<Notes />} />
        {/* <Route path="/nueva" element={<CreateNotePage />} />
        <Route path="/editar/:id" element={<CreateNotePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;