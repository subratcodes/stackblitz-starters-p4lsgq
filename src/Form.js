import { useState } from 'react';
import React from 'react';
import { faker } from '@faker-js/faker';
import { useRef } from 'react';

function initilzeData() {
  console.log('called');
  return faker.person.firstName();
}

export default function Form() {
  const [fName, setFName] = useState('');
  const [lName, setlName] = useState('');
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);

  function handleNameChnage(e) {
    setFName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validateData()) {
      let data = createData();
      console.log(JSON.stringify());
    } else console.log('Error in the form');
  }

  function validateData() {
    console.log(fName, lName);
    if (fName.length == 0 || fName == ' ') {
      fNameRef?.current.focus();
      return false;
    }

    if (lName.length == 0 || lName == ' ') {
      lNameRef?.current.focus();
      return false;
    }

    return true;
  }

  function createData() {}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="fName"
          ref={fNameRef}
          value={fName}
          onChange={handleNameChnage}
        />

        <input
          placeholder="lName"
          value={lName}
          ref={lNameRef}
          onChange={handleLastNameChange}
        />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
