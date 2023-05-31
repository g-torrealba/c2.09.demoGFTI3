import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  Éxito c2.09.demoGFTI3
`;

setupCounter(document.querySelector("#counter"));
