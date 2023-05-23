import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  function updateGuessResults(newResult) {
    const checkedGuess = checkGuess(newResult, answer);
    const newGuessResults = [...guessResults];
    newGuessResults.push(checkedGuess);
    setGuessResults(newGuessResults);
  }

  return <>
  <GuessResults results={guessResults}/>
  <GuessInput updateGuesses={updateGuessResults}/>
  </>;
}

export default Game;
