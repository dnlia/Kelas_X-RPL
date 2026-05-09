import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <div className="app">
        {user && <Header />}
        <main className="container">
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/cv" 
              element={
                <PrivateRoute>
                  <CV />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <PrivateRoute>
                  <Portfolio />
                </PrivateRoute>
              } 
            />
            <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
