import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { RequestForm } from "./RequestForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Titas Tacos
        </p>
        <RequestForm />
      </header>
    </div>
  );
}

export default App;
