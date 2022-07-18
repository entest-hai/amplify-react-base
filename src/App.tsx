import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import MyCard from "./components/MyCard";
import Responsive from "./components/Responsive";
import MyDark from "./components/MyDark";
import MyNav from "./components/MyNav";

import "./styles/index.scss";
import MyColor from "./components/MyColor";
import MySVG from "./components/MySVG";

function App() {
  return (
    <div>
      <MyNav></MyNav>
      <MyCard></MyCard>
      <Responsive></Responsive>
      <MyDark></MyDark>
      <MyColor></MyColor>
      <MySVG></MySVG>
    </div>
  );
}

export default App;
