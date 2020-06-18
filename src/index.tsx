import React from "react";
import ReactDOM from "react-dom";
import { NombresComponent } from "./nombresComponent";
import logoImg from "./content/vera_1.png";

ReactDOM.render(
  <div>
    <h1>Mi Mundo con REACT HOLAAAA</h1>
    <NombresComponent />
  </div>,
  document.getElementById("root")
);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
