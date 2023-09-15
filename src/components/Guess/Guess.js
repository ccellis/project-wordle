import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((num) => (
          <span className="cell" key={num}></span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {value.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
