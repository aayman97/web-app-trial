import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../input-login-component";

function App() {
  const [show, setShow] = React.useState(true);
  const newFunction = () => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShow(!show)}>toggle alert</button>

        <br />
        <br />

        <input-login-component
          widthOfTheInput={500}
          heightOfTheInput={40}
          gap={30}
          emailPlaceHolder={"Email"}
          passwordPlaceHolder={"Password"}
          buttonWidth={130}
          buttonText={"Sign In"}
        ></input-login-component>
      </header>
    </div>
  );
}

export default App;
