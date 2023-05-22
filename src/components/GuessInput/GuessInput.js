import React, { useState } from "react";

function GuessInput({updateGuesses}) {
  const [guessInput, setGuessInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guessInput });
    updateGuesses(guessInput);

    setGuessInput('');
  }

  return <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
                required
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                value={guessInput}
                onChange={(event) => {
                  const nextGuess = event.target.value.toUpperCase();
                  setGuessInput(nextGuess);
                }}
                id="guess-input"
                type="text"
      />
    </form>
  </>;
}

export default GuessInput;
