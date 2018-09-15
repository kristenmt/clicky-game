import React, { Component } from 'react';
import './App.css';
import puppies from "./puppies.json";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"

class App extends Component {
  state = {
    message: "Click on a picture to start the game!",
    puppies: puppies,
    unselectedPuppies: puppies
};

// add scoring later
  
componentDidMount() {
}
// shuffle through puppy cards

// select the puppies

// render the images and cards
render() {
    return (
    <Wrapper>
      <Title />
    {
      this.state.puppies.map(puppy => (
        <PuppyCard
        breed={puppies.breed}
      key={puppies.breed}
      image={puppies.image}
      />
    ))
    }
    </Wrapper>
  );
}
}

export default App;
