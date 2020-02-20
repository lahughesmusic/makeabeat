import React, { useState } from "react";
import Play from './track';

function Grid() {
  const [chord1, setChord1] = useState("C");
  const [chord2, setChord2] = useState('C');
  const [chord3, setChord3] = useState('C');
  const [chord4, setChord4] = useState('C');

  const styles = {
    border: "2px solid darkblue",
    height: "150px",
    width: "20%",
    marginTop: "100px",

    float: 'left'
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
  const left = {

    marginLeft: "50px"
  };

  return (
    <div style={left}>

      <div style={styles} className="col-">
        <h1 style={keyStyle}>{chord1}</h1>
        <h2>1.</h2>

        <label for="key">KEY </label>

        <select
          style={dropdownStyles}
          id="key"
          onChange={e => setChord1(e.target.value)}
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
        <h1 style={keyStyle}>{chord2}</h1>
        <h2>2.</h2>

        <label for="key">KEY </label>

        <select
          style={dropdownStyles}
          id="key"
          onChange={e => setChord2(e.target.value)}
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
        <h1 style={keyStyle}>{chord3}</h1>
        <h2>3.</h2>

        <label for="key">KEY </label>

        <select
          style={dropdownStyles}
          id="key"
          onChange={e => setChord3(e.target.value)}
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
        <h1 style={keyStyle}>{chord4}</h1>
        <h2>4.</h2>

        <label for="key">KEY </label>

        <select
          style={dropdownStyles}
          id="key"
          onChange={e => setChord4(e.target.value)}
        >
          <option value="C">C</option>
          <option value="dm">dm</option>
          <option value="em">em</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="am">am</option>
        </select>
      </div>



    </div>

    // <div className="container">
    //   <div className="row">
    //     <div style={styles} className="col-">
    //       <h1 style={keyStyle}>{this.chord}</h1>
    //       <h2>1.</h2>

    //       <label for="key">KEY </label>

    //       <select
    //         style={dropdownStyles}
    //         id="key"
    //         onChange={e => setChord(e.target.value)}
    //       >
    //         <option value="C">C</option>
    //         <option value="dm">dm</option>
    //         <option value="em">em</option>
    //         <option value="F">F</option>
    //         <option value="G">G</option>
    //         <option value="am">am</option>
    //       </select>
    //     </div>
    //     <div style={styles} className="col-">
    //       <h1 style={keyStyle}>{this.chord}</h1>
    //       <h2>2.</h2>
    //       <label for="key">KEY </label>

    //       <select style={dropdownStyles} id="key"
    //         onChange={e => setChord(e.target.value)}>
    //         <option value="C">C</option>
    //         <option value="dm">dm</option>
    //         <option value="em">em</option>
    //         <option value="F">F</option>
    //         <option value="G">G</option>
    //         <option value="am">am</option>
    //       </select>
    //     </div>
    //     <div style={styles} className="col-">
    //       <h1 style={keyStyle}>{this.chord}</h1>
    //       <h2>3.</h2>
    //       <label for="key">KEY </label>

    //       <select style={dropdownStyles} id="key"
    //         onChange={e => setChord(e.target.value)}>
    //         <option value="C">C</option>
    //         <option value="dm">dm</option>
    //         <option value="em">em</option>
    //         <option value="F">F</option>
    //         <option value="G">G</option>
    //         <option value="am">am</option>
    //       </select>
    //     </div>
    //     <div style={styles} className="col-">
    //       <h1 style={keyStyle}>{this.chord}</h1>
    //       <h2>4.</h2>
    //       <label for="key">KEY </label>

    //       <select style={dropdownStyles} id="key"
    //         onChange={e => setChord(e.target.value)} ß>
    //         <option value="C">C</option>
    //         <option value="dm">dm</option>
    //         <option value="em">em</option>
    //         <option value="F">F</option>
    //         <option value="G">G</option>
    //         <option value="am">am</option>
    //       </select>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Grid;
