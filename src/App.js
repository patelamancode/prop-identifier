import React from "react";
import "./styles.css";
import { useState } from "react";

var Propertydictionary = {
  "🏤": "Post Office",
  "🏥": "Hospital",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏩": "Love Hotel",
  "🏪": "Convenience Store",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory"
};

var Propertyweknow = Object.keys(Propertydictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function propertyinputhandler(event) {
    var userinput = event.target.value;
    var meaning = Propertydictionary[userinput];

    if (meaning === undefined) {
      meaning = "Database not found this ☹";
    }
    setMeaning(meaning);
  }

  function propertyclickhandler(Property) {
    var meaning = Propertydictionary[Property];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Identifier</h1>
      <h2>Drag your Property icon here 👇!!</h2>
      <input onChange={propertyinputhandler} placeholder="Drag here"></input>
      <h3>{meaning}</h3>

      <h4>Select your Property icon 👇</h4>
      {Propertyweknow.map(function (Property) {
        return (
          <div
            className="icon"
            onClick={() => propertyclickhandler(Property)}
            key={Property}
          >
            {Property}
          </div>
        );
      })}
    </div>
  );
}
