import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
 import { range } from '../../utils';

function GuessResults({results}) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess key={num} value={results[num]} />
    ))}
    
</div>;
}

export default GuessResults;
