import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'app.layout/Header';
import Footer from 'app.layout/Footer';
import Main from 'pages/main';
import Sign from 'pages/sign';
import ToDoPage from 'pages/todo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<ToDoPage />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
