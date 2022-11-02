import React, { useState } from "react";
import "./styles.css";

const emoji_dictionary = {
  "👹": "Ogre",
  "👺": "Goblin",
  "🧛": "Vampire",
  "👽": "Alien",
  "🧚": "Fairy",
  "🧛": "Vampire",
  "🧜": "Merperson",
  "🧝": "Elf",
  "🧞": "Genie",
  "🧟": "Zombie"
};

var emojiWeKNow = Object.keys(emoji_dictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emoji_dictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setmeaning(meaning);
  }
  function emojiHAndler(emoji) {
    var meaning = emoji_dictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div id="App">
      <h1>Emoji Meaning</h1>
      <input onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>

      {emojiWeKNow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiHAndler(emoji)}
            style={{ cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
      <h3>About</h3>
      <p>You will know the meaning of the mentioned Emoji!!!</p>
    </div>
  );
}
