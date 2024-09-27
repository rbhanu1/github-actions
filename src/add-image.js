import scene from "../scene.jpeg";
function addImage() {
  const img = document.createElement("img");
  img.alt = "scene";
  img.src = scene;
  document.querySelector("body").append(img);
}

export default addImage;
