import React, { useState } from "react";
import "./styles.css";

const Temperature = () => {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperature === 30) return;

    const newTemp = temperature + 1;

    setTemperature(newTemp);
    if (newTemp >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperature === 0) return;

    const newTemp = temperature - 1;
    setTemperature(newTemp);
    if (newTemp < 20) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="container">
      <div className="temperature-display1">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default Temperature;
