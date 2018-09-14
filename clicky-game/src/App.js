import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import puppies from "./puppies.json";

const App = () => (
  <div>
    <imageContainer
      list={puppies}
      />
  </div>
)

export default App;
