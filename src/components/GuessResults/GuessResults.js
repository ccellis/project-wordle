import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess value={guess} key={index} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guessList.length).map((_, index) => (
        <Guess value={undefined} key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
