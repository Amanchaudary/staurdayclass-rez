// npm i express

import bodyParser from "body-parser";
import express from "express";
const app = express();
const PORT = 3000;
// Start server
app.listen(PORT, (req, res) => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// makeing api
// 1get all joke
app.get("/alljokes", (req, res) => {
  res.json(programmingJokes);
});
// 2 get each id by programmingJokes
app.get("/alljokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const jokefound = programmingJokes.find((joke) => joke.id === id);
  res.json(jokefound);
});
//  let jokeFound = {}
//     programmingJokes.forEach(joke => {
//         if (joke.id === id) {
//             jokeFound = joke
//         }
//     })

//     for of
//     for (const joke of programmingJokes) {
//         if (joke.id === id) {
//             jokeFound = joke
//         }

//     }
//     for in
//     for (const i in programmingJokes) {
//         const joke = programmingJokes[i]
//         if (joke.id === id) {
//             jokeFound = joke
//         }

//     }
// 3 random all joke
app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * programmingJokes.length) + 1;
  res.json(programmingJokes[random]);
});

// 4 filter joke by type
app.get("/filter", (req, res) => {
  const jokeType = req.query.jokeType;
  const filterjokes = programmingJokes.filter((joke) => {
    return joke.jokeType === jokeType;
  });
  res.json(filterjokes);
});
// 5 serach by textJoke

app.get("/search", (req, res) => {
  const jokeText = req.query.jokeText;
  const searchTest = programmingJokes.filter((joke) => {
    return joke.jokeText.includes(jokeText);
  });
  res.json(searchTest);
});
// 6 post method
app.use(bodyParser.urlencoded({extended:true}))
app.post("/jokes", (req, res) => {
  const newJoke = {
    id: programmingJokes.length + 1,
    jokeText: req.body.jokeText,
    jokeType: req.body.jokeType,
  };
  programmingJokes.push(newJoke);
  console.log(programmingJokes);
  res.json(newJoke);
});

const programmingJokes = [
  {
    id: 1,
    jokeText:
      "Why do programmers prefer dark mode? Because light attracts bugs.",
    jokeType: "Debugging",
  },

  {
    id: 2,
    jokeText:
      "There are 10 types of people in the world: Those who understand binary, those who don't, and those who know it's a ternary joke.",
    jokeType: "Logic",
  },
  {
    id: 3,
    jokeText: "What is the biggest lie in programming? It works on my machine.",
    jokeType: "General",
  },
  {
    id: 4,
    jokeText:
      "How do you generate a random string? Put a first-time user on the keyboard.",
    jokeType: "Testing",
  },
  {
    id: 5,
    jokeText:
      "Debugging: Removing the needles from the haystack. Programming: Putting the needles into the haystack.",
    jokeType: "Debugging",
  },
  {
    id: 6,
    jokeText:
      "Why did the programmer quit his job? Because he didn't get arrays.",
    jokeType: "Languages",
  },
  {
    id: 7,
    jokeText: "Why do Java developers wear glasses? Because they don't C#.",
    jokeType: "Languages",
  },
  {
    id: 8,
    jokeText:
      "How many programmers does it take to change a lightbulb? None, that’s a hardware problem.",
    jokeType: "Hardware",
  },
  {
    id: 9,
    jokeText: "What’s the object-oriented way to become wealthy? Inheritance.",
    jokeType: "OOP",
  },
  {
    id: 10,
    jokeText:
      "Why was the developer fired from the SQL company? He kept trying to drop the database.",
    jokeType: "Databases",
  },
  {
    id: 11,
    jokeText:
      "A SQL query walks into a bar, walks up to two tables and asks... Can I join you?",
    jokeType: "Databases",
  },
  {
    id: 12,
    jokeText:
      "Why was the JavaScript developer sad? Because he didn't $know how to console his feelings.",
    jokeType: "JavaScript",
  },
  {
    id: 13,
    jokeText:
      "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program... The rest will write Perl.",
    jokeType: "C",
  },
  {
    id: 14,
    jokeText:
      "What’s a programmer's favorite thing to do after a big commit? Take a git nap.",
    jokeType: "Version Control",
  },
  {
    id: 15,
    jokeText:
      "Why did the developer go broke? Because he used up all his cache.",
    jokeType: "Performance",
  },
  {
    id: 16,
    jokeText:
      "What is the biggest lie in programming? Documentation is up to date.",
    jokeType: "General",
  },
  {
    id: 17,
    jokeText:
      "Why was the REST API client sad? It couldn't get a proper GET request in.",
    jokeType: "Networking",
  },
  {
    id: 18,
    jokeText: "What do you call a dog that can program? A data retriever.",
    jokeType: "Security",
  },
  {
    id: 19,
    jokeText:
      "Why did the developer always carry a ladder? Because he wanted to reach a higher level of abstraction.",
    jokeType: "html",
  },
  {
    id: 20,
    jokeText:
      "Why are private classes so bad at communication? Because they don't like to be overridden.",
    jokeType: "OOP",
  },
  {
    id: 21,
    jokeText:
      "What do you call a programmer who can only code in BASIC? A fundamentalist.",
    jokeType: "Languages",
  },
  {
    id: 22,
    jokeText:
      "What do you call a snake that measures things? A python programmer.",
    jokeType: "Python",
  },
  {
    id: 23,
    jokeText:
      "What is the difference between a software engineer and a computer scientist? The computer scientist knows the algorithm for the solution, and the software engineer knows how to use the framework to solve the problem.",
    jokeType: "C++",
  },
  {
    id: 24,
    jokeText:
      "Why did the developer get a 'D' on his math test? He only understood floating point numbers.",
    jokeType: "Logic",
  },
  {
    id: 25,
    jokeText:
      "A QA engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders a -1 beer. The bar tender apologizes and says, 'I can't serve you, you've broken my bar.'",
    jokeType: "Testing",
  },
  {
    id: 26,
    jokeText:
      "Two threads walk into a bar. The bartender says, 'Hey, I'm going to need you to wait outside.' They reply, 'We can't, we're mutex-ually exclusive.'",
    jokeType: "Networking",
  },
  {
    id: 27,
    jokeText:
      "What's the best thing about booleans? Even if you are wrong, you are only off by a bit.",
    jokeType: "Logic",
  },
  {
    id: 28,
    jokeText:
      "Where do programmers like to store their secrets? In a *key*-value store.",
    jokeType: "Security",
  },
  {
    id: 29,
    jokeText:
      "Why did the programmer wear a fedora? To stay ahead of the compiler.",
    jokeType: "General",
  },
  {
    id: 30,
    jokeText:
      "Why did the compiler's feelings get hurt? Because the code was a little sensitive.",
    jokeType: "Languages",
  },
  {
    id: 31,
    jokeText:
      "Knock, knock. Go away, I'm still trying to vertically align something.",
    jokeType: "html",
  },
  {
    id: 32,
    jokeText:
      "A programmer is told to 'Go to hell.' He replies, 'Error: destination not found.'",
    jokeType: "Debugging",
  },
  {
    id: 33,
    jokeText:
      "What's the difference between UDP and TCP? UDP is like shouting into a crowd. TCP is like a phone call with acknowledgments.",
    jokeType: "Networking",
  },
  {
    id: 34,
    jokeText:
      "Why did the programmer get stuck in the dryer? Because he had too many uncommitted changes.",
    jokeType: "Version Control",
  },
  {
    id: 35,
    jokeText: "What is the most used language in programming? Profanity.",
    jokeType: "General",
  },
  {
    id: 36,
    jokeText:
      "I’ve been writing code in C++ for 15 years. I’m still trying to figure out how to close the command prompt.",
    jokeType: "C++",
  },
  {
    id: 37,
    jokeText:
      "Why was the developer constantly tired? Because he never got enough REST.",
    jokeType: "Networking",
  },
  {
    id: 38,
    jokeText:
      "Did you hear about the two arrays that got married? The reception was great, but the ceremony was just a function call.",
    jokeType: "JavaScript",
  },
  {
    id: 39,
    jokeText: "What did the programmer name his son? Array.",
    jokeType: "OOP",
  },
  {
    id: 40,
    jokeText:
      "What did the malicious code say when it was hungry? I need to exploit a vulnerability.",
    jokeType: "Security",
  },
  {
    id: 41,
    jokeText:
      "What’s the difference between a good programmer and a great programmer? A good programmer writes code. A great programmer writes code that other good programmers can read.",
    jokeType: "General",
  },
  {
    id: 42,
    jokeText:
      "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    jokeType: "Logic",
  },
  {
    id: 43,
    jokeText:
      "What is a programmer's favorite bug? The one that someone else found and fixed.",
    jokeType: "Testing",
  },
  {
    id: 44,
    jokeText:
      "Why was the linked list always getting into trouble? It was always being *re-head*-ed.",
    jokeType: "Data Structure",
  },
  {
    id: 45,
    jokeText:
      "Why do programmers hate to use the `<blink>` tag? Because they like to keep their code stable and not blinking.",
    jokeType: "html",
  },
  {
    id: 46,
    jokeText:
      "Have you heard about the new computer science major? They are learning recursion by watching themselves on a monitor.",
    jokeType: "Logic",
  },
  {
    id: 47,
    jokeText: "What's a developer's favorite drink? Root beer.",
    jokeType: "General",
  },
  {
    id: 48,
    jokeText:
      "Did you hear about the band 'The Code Breakers'? They broke up after they ran out of arguments.",
    jokeType: "General",
  },
  {
    id: 49,
    jokeText:
      "What is a programmer's favorite place to hang out? The $HOME directory.",
    jokeType: "General",
  },
  {
    id: 50,
    jokeText:
      "Why did the programmer get fired from the orange juice factory? Because he couldn't concentrate.",
    jokeType: "Funny",
  },
];
