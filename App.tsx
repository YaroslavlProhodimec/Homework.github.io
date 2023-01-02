import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordions/Accordions";
import { Rating } from "./components/Accordions/Rating/Rading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PageTitle title={"Salam"} />
        <Rating value={1} />
        <Rating value={2} />
        <Accordion title={"Hello"} collapsed={true} />
        <Accordion title={"Menu"} collapsed={true} />
      </header>
    </div>
  );
}

type PagePropsType = {
  title: string;
};

function PageTitle(props: PagePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
