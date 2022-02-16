import React from 'react';
import './App.css';
import LogInForm from './components/log-in-form';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <NavBar />
      <LogInForm />
    </div>
  );
}

export default App;
