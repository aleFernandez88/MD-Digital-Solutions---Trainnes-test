const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
let url = `http://api.openweathermap.org/data/2.5/weather?q=Rio&appid=${apiKey}&units=metric`;

let contenido = document.querySelector("#contenido");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

contenido.innerHTML = `
  <tr>
                <th scope="row">1</th>
                <td>${data.name}</td>
                <td>${data.main.temp_max}</td>
                <td>${data.main.temp_min}</td>
            </tr>`;
