import React from 'react';

function Guess({value}) {
  return (
    <p className="guess">
      <span className="cell">{value ? value[0] : undefined}</span>
      <span className="cell">{value ? value[1] : undefined}</span>
      <span className="cell">{value ? value[2] : undefined}</span>
      <span className="cell">{value ? value[3] : undefined}</span>
      <span className="cell">{value ? value[4] : undefined}</span>
    </p>
  );
}

export default Guess;
