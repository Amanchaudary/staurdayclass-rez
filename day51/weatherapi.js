const url = "https://weatherapi-com.p.rapidapi.com/alerts.json?q=london";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

// fetch(url, options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     document.getElementById('name').textContent=data.location.name
//     document.getElementById('region').textContent=data.location.region
//   })

// another way
async function getWeather() {
  const response = await fetch(url, options);
  console.log(response);
  const data = await response.json();
  console.log(data);
  document.getElementById("name").textContent = data.location.name;
  document.getElementById("region").textContent = data.location.region;
}
getWeather();
