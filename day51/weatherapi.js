// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
//   method: "GET",
//   headers: {
// 		'x-rapidapi-key': '23d04979a5msh7992b22e3e06f83p13d8e5jsn5d2cf5454d52',
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// // fetch(url, options)
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error("Network response was not ok " + response.status);
// //     }
// //     return response.json();
// //   })
// //   .then(data => {
// //     console.log(data);
// //     document.getElementById('name').textContent=data.location.name
// //     document.getElementById('region').textContent=data.location.region
// //   })

// // another way
// async function getWeather() {
//   const response = await fetch(url, options);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   document.getElementById("name").textContent = data.location.name;
//   document.getElementById("country").textContent = data.location.country;
//   document.getElementById("localtime").textContent = data.location.localtime;
//   document.getElementById("temperature").textContent = data.current.temp_c;
//   document.getElementById("text").textContent = data.current.condition.text;
//   document.getElementById("icon").src = data.current.condition.icon;
// }
// getWeather();

// require('dotenv').config();

// const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=tokyo';

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

// const response = fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById('country').textContent = data.location.country
//         document.getElementById('localtime').textContent = data.location.localtime
//         document.getElementById('name').textContent = data.location.name
//     })
//     ;

document
  .getElementById("weatherForm")
  .addEventListener("submit", async function getWeather(e) {
    e.preventDefault();
    const city = document.getElementById("city").value;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ce615560a9msh84462abc1582c3ep10b07fjsncfc967f5fa93",
        // 'x-rapidapi-key': process.env.RAPIDAPIKEY,
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    // const a = new String("hello")
    // console.log(a)
    const response = await fetch(url, options); //resolve reeject
    console.log(response); //response
    const data = await response.json();
    document.getElementById("container").style.display = "block";
    document.getElementById("name").textContent = data.location.name;
    document.getElementById("country").textContent = data.location.country;
    document.getElementById("localtime").textContent = data.location.localtime;
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("condition").textContent =
      data.current.condition.text;
    document.getElementById("icon").src = data.current.condition.icon;
    console.log(data);
  });

// getWeather()
// console.log(response)
