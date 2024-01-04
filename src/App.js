import React from 'react';
import './style.css';
import { useState, useEffect, useContext, createContext } from 'react';
import Loader from 'Loader';
import Form from './Form';
import { fetchNorris } from './api/apiUtils.js';
import Show from './Show.js';
import { useRef } from 'react';
import JokeContainer from './JokeContainer';
import UserContainer from './Components/Users/UserContainer';

export const ThemeContext = createContext([]);

export default function App() {
  const [loading, isLoading] = useState(false);
  const [info, setInfo] = useState({});
  const [data, setData] = useState({});
  const buttonRef = useRef(0);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <UserContainer />
    </div>
  );
}
