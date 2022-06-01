import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [highlighted, setHighlighted] = React.useState(false);

  return (
    <div className="App">
      <h1 className="">Contact Import</h1>
      <div
        // style={{
        //   border: "2px solid red",
        // }}
        className={'${highlighted}'}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "text/csv")
            .forEach((file) => {
              console.log(file);
            });
        }}
      >
        Drop Here
      </div>
    </div>
  );
}

export default App;
