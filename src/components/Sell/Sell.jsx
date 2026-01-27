import React, { useState } from "react";
import SellCarForm from "./SellCarForm";
import "./Sell.css";

function Sell() {
  // state + handlers here
  return (
    <div className="sell-page">
      <h1>Sell Your Car</h1>
      <SellCarForm />
    </div>
  );
}

export default Sell;


