import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Greet } from "./Greet";
import { Fruit } from "./Fruit";

export const Landing =()=>{
    return(
  <BrowserRouter>
  <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="greet" element= {<Greet/>}/>
        <Route path="fruit" element= {<Fruit/>}/>
      </Routes>
  </BrowserRouter>
    )
}