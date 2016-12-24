import React from 'react';
const { Component } = React;

const App = (props) => {
  return (
    <div id="app">
    {React.Children.toArray(props.children)}
    </div>
  );
};

export default App;
