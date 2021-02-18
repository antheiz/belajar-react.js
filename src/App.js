import { Component } from "react";
import {Header} from "./Header";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <p>Hello, Everyone</p>
    </div>
  );
}

export default App;


{/* 
  1. Ada 3 Jenis Component : Class Component, Function Component, Arrow Function Component
  2. Jenis cara export dan import ada 2 : Export Default dan Export yang pake ini {}
*/}

