import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Card from "./Card";
const Hello = () => {
  return (
    <>
      <App />
      <Card />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);
