import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing"); //playing, won, lost

  function handleGuess(guess) {
    if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Only ${NUM_OF_GUESSES_ALLOWED} guesses allowed :(`);
      return;
    }
    if (gameStatus !== "playing") {
      window.alert("The game is over!");
      return;
    }

    // Need to use "next" here b/c React state updates are async+
    const nextGuessList = [...guessList, checkGuess(guess, answer)];
    setGuessList(nextGuessList);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput handleGuess={handleGuess} />
      <Banner gameStatus={gameStatus} guessList={guessList} answer={answer} />
    </>
  );
}

export default Game;
