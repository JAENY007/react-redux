import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'app.layout/Header';
import Footer from 'app.layout/Footer';
import Main from 'pages/main';
import SignIn from 'pages/signin';
import SignUp from 'pages/signup';
import ToDoPage from 'pages/todo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<ToDoPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
