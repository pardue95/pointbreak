import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  return (
    <div className="App">
      <h1 className="">Contact Import</h1>
      <div
        style={{
          border: "2px solid red",
        }}
        className={"border: '1px solid red'"}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        Drop Here
      </div>
    </div>
  );
}

export default App;
