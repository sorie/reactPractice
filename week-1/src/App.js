import React from "react";

function App() {
  return <GrandFather />;
}

function GrandFather() {
  const name = "정광철";
  return <Mother GrandFatherName={name} />;
}

function Mother(props) {
  return <Child GrandFatherName={props.GrandFatherName} />;
}

function Child({ GrandFatherName }) {
  return <div>{GrandFatherName}</div>;
}

export default App;
