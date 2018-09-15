import React, { Component } from 'react';
import './App.css';
import puppies from "./puppies.json";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";


class App extends Component {
  state = puppies
};
  

render();
  return (
    <Wrapper>
    {
      this.state.puppies.map(puppies => (
        <PuppyCard
        breed={puppies.breed}
      key={puppies.breed}
      image={puppies.image}
      />
    ))
    }
    </Wrapper>
  );



export default App;
