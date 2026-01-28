import React, { useState } from "react";
import SellCarForm from "./SellCarForm";
import "./Sell.css";

function Sell() {
  // state + handlers here
  return (
    <div className="sell-page">
      <h1>Sell Your Car</h1>
      <p>Note: You must have WhatsApp installed on your device in order for this form to be sent.Alternatively, you can contact us directly via phone or email.</p>

      <SellCarForm />
    </div>
  );
}

export default Sell;


