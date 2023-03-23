import React from "react";
import FootBar from "./components/FootBar";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/NavBar"
import SecondBanner from "./components/SecondBanner";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <MainBanner/>
      
      <SecondBanner/>
    </div>
  );
}

export default App;
