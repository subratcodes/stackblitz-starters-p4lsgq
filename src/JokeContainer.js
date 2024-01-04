import React from 'react';
import ThemeContext from './JokeContainer.js';
import { useContext } from 'react';
import { useEffect } from 'react';

export default function JokeContainer(props) {
  const value = useContext(ThemeContext);

  useEffect(() => {
    console.log('Joke container being run');
  }, []);

  return (
    <div>
      {console.log(value)}
      <p>{props && props.content ? props.content : null}</p>
    </div>
  );
}
