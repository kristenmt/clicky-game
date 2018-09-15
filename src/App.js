import React, { Component } from 'react';
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Scoring from "./components/Scoring";
import Title from "./components/Title"
import puppies from "./puppies.json";
import './App.css';
class App extends Component {
  state = {
    message: "Click on a picture to start the game!",
    curScore: 0,
    topScore: 0,
    puppies: puppies,
    unselectedPuppies: puppies
};

// add scoring later
  
componentDidMount() {
}
// shuffle through puppy cards
shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// select the puppies
selectPuppy = breed => {
  const getPuppy = this.state.unselectedPuppies.find(item => item.breed === breed);

  if (getPuppy === undefined) {
    this.setState({
      message: "You lose!",
      topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
      curScore: 0,
      puppies: puppies,
      unselectedPuppies: puppies
    });
  }
  else {
    const newPuppies = this.state.unselectedPuppies.filter(item => item.breed !== breed);
    this.setState({
      message: "Correct!",
      curScore: this.state.curScore + 1,
      puppies: puppies,
      unselectedPuppies: newPuppies
    });
  }
  this.shuffleArray(puppies);
}
// render the images and cards
render() {
    return (
    <Wrapper>
      <Title />
      <Scoring 
        curScore={this.state.curScore}
        topScore={this.state.topScore}
      />
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
