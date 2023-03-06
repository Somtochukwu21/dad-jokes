import axios from "axios";

export function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com/", config).then((res) => {
    const jokeHolder = document.querySelector(".jokeholder");
    jokeHolder.innerHTML = res.data.joke;
  });
}
