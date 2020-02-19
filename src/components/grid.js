import React, { useState, useEffect } from "react";

function Grid() {
  let [keySig, setKeySig] = useState("C");
  useEffect(() => console.log(keySig));
  const styles = {
    border: "2px solid darkblue",
    height: "150px",
    width: "25%",
    marginTop: "100px"
  };
  const dropdownStyles = {
    border: "px solid darkblue",
    marginTop: "50px"
  };
  const keyStyle = {
    textAlign: "center",
    fontSize: "80px",
    position: "absolute",
    marginLeft: "7%"
  };

  return (
    <div className="container">
      <div className="row">
        <div style={styles} className="col-">
          <h1 style={keyStyle}>{keySig}</h1>
          <h2>1.</h2>

          <label for="key">KEY </label>

          <select
            style={dropdownStyles}
            id="key"
            onChange={e => setKeySig(e.targeValue)}
          >
            <option value="C">C</option>
            <option value="dm">dm</option>
            <option value="em">em</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="am">am</option>
          </select>
        </div>
        <div style={styles} className="col-">
          <h1 style={keyStyle}>C</h1>
          <h2>2.</h2>
          <label for="key">KEY </label>

          <select style={dropdownStyles} id="key">
            <option value="C">C</option>
            <option value="dm">dm</option>
            <option value="em">em</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="am">am</option>
          </select>
        </div>
        <div style={styles} className="col-">
          <h1 style={keyStyle}>C</h1>
          <h2>3.</h2>
          <label for="key">KEY </label>

          <select style={dropdownStyles} id="key">
            <option value="C">C</option>
            <option value="dm">dm</option>
            <option value="em">em</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="am">am</option>
          </select>
        </div>
        <div style={styles} className="col-">
          <h1 style={keyStyle}>C</h1>
          <h2>4.</h2>
          <label for="key">KEY </label>

          <select style={dropdownStyles} id="key">
            <option value="C">C</option>
            <option value="dm">dm</option>
            <option value="em">em</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="am">am</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Grid;
