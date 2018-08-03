import React, { Component } from 'react';
import Search from '../Search'



class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      query: ''
      
    }

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state, 'this is mother fucking state dude')


  }

  handleSubmit = (e) => {
    e.preventDefault();

    const query = this.state.query
    console.log(query, 'asdfasdfasdf')

  }

  render(){
    return(

      <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>  
      </div>
      )
  }
}




export default SearchContainer;





