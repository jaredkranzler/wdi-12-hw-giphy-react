import React, { Component } from 'react';
import './Home.css';
import SearchContainer from './SearchContainer'

class Home extends Component {
  constructor(){
    super();
    this.state = {

    }
  }




  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
        <SearchContainer />

      </div>
      );
  }
}

export default Home;