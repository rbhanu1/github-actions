import "./hello-world.css";
import globals from "globals";
function helloWorld() {
  const container = document.createElement("div");
  container.classList.add("blue");
  container.innerText = "Hello World";
  const body = document.querySelector("body");
  body.appendChild(container);
}
export default helloWorld;
