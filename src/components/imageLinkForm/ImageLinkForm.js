import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"Esse Cérebro Mágico vai reconhecer faces nas suas fotos. Teste aqui."}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detectar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
