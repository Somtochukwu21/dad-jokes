import "../styles/style.css";
import laughing from "../images/images.png";
import { generateJoke } from "./generateJokes";

window.onload = () => {
  const imageSrc = document.querySelector(".image-src");
  const jokeBtn = document.querySelector(".Btn");

  imageSrc.src = laughing;
  jokeBtn.addEventListener("click", ()=>generateJoke());
};
