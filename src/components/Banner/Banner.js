import React from "react";

function Banner({ gameStatus, guessList, answer }) {
  if (gameStatus === "playing") {
    return <></>;
  }

  if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {guessList.length === 1 ? "1 guess" : `${guessList.length} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  }
}

export default Banner;
