import html2canvas from "html2canvas";
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("");

  const _handleChange1 = (e) => {
    setLinea1(e.target.value);
  };
  const _handleChange2 = (e) => {
    setLinea2(e.target.value);
  };
  const _handleChangeSelect = (e) => {
    setImage(e.target.value);
  };
  const _handleClick = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };
  return (
    <>
      {/* slect picker de meme */}
      <div className="container content">
        <select onChange={_handleChangeSelect} className="browser-default">
          <option value="" disabled selected>
            Seleccine un meme
          </option>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
        {/* Input text- primera linea */}

        <div className="input-field">
          <input
            id="line1"
            type="text"
            className="validate"
            value={linea1}
            name="linea1"
            onChange={_handleChange1}
          />
          <label htmlFor="line1">Line 1</label>
        </div>
        {/* Input text- segunda linea */}
        <div className="input-field col">
          <input
            id="line2"
            type="text"
            className="validate"
            value={linea2}
            name="linea2"
            onChange={_handleChange2}
          />
          <label htmlFor="line2">Line 2</label>
        </div>
        {/* boton exportar */}
        <div className="center">
          <button className="btn red" onClick={_handleClick}>
            Exportar
          </button>
        </div>
        <div id="meme" className="center">
          <span className="text1">{linea1}</span>
          <span className="text2  ">{linea2}</span>
          <img src={`/assets/${image}.jpg`} alt="imagen" className="imagen" />
        </div>
      </div>
    </>
  );
};

export default App;
