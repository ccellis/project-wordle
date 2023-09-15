import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuess(guess) {
    // Need to use "next" here b/c React state updates are async
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
