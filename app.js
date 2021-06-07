document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();

  const baseURL = "http://api.icndb.com/jokes/random";

  const numberOfJokes = document.querySelector("#number").value;

  const xhr = new XMLHttpRequest();

  const requestURL = `${baseURL}/${numberOfJokes}`;

  xhr.open("GET", requestURL, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const jokes = response.value;

      let output = "";

      if (response.type === "success") {
        jokes.forEach(function (joke) {
          output += `
            <li>${joke.joke}</li>
          `;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  }

  xhr.send();
}