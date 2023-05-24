import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner';
 import LostBanner from '../LostBanner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessResults, setGuessResults] = useState([]);
  function updateGuessResults(newResult) {
    const checkedGuess = checkGuess(newResult, answer);
    const newGuessResults = [...guessResults];
    newGuessResults.push(checkedGuess);
    setGuessResults(newGuessResults);

    if (newResult.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (newGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return <>
  <GuessResults results={guessResults}/>
  <GuessInput gameStatus={gameStatus} updateGuesses={updateGuessResults}/>
  {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guessResults.length} />
  )}
  {gameStatus === 'lost' && <LostBanner answer={answer} />}
  </>;
}

export default Game;
