import Radium from "radium";
import React from "react";
import ReactDOM from "react-dom";

const App = () => <Radium.StyleRoot>Hello world!</Radium.StyleRoot>;

ReactDOM.render(<App />, document.getElementById("react"));
