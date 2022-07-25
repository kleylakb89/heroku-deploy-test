import React from 'react';

// TODO: Create a `name` variable
const name = 'Kristin Kleyla';

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = 'seems pretty versatile and accessible!';

const countLetters = (name) => {
  const count = {};
  const lowerName = name.toLowerCase();
  for (let letter of lowerName) {
    if (!letter.trim()) continue;
    if (!count[letter]) {
      count[letter] = 1;
    } else count[letter]++;
  }
  const list = [];
  for (let key in count) {
    console.log(key);
    list.push(<><dt>{key}: </dt><dd style={{marginRight: '16px'}}>{count[key]}</dd></>);
  }
  // const count = name.split('').reduce((previous, letter) => {
  //   !previous[letter] ? previous[letter] = 1 : previous[letter]++
  //   console.log(previous);
  //   return previous;
  // }, {})
  return <dl style={{display: 'flex'}}>{list}</dl>;
};

const letterCount = countLetters(name);

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
          <h2>{letterCount}</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
