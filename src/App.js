import React from 'react';
import './App.css';
import CardList from "./cardList";
import Search from "./search"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      search: ""
    }
  }
//fetching api 
  componentDidMount() {
    fetch('http://starlord.hackerearth.com/recipe')
      .then(response => response.json())
      .then(data => {
        this.setState({ recipes: data })
      })
  }

  //Searching function
  onSearch = (event) => {
    console.log(event.target.value)
    this.setState({ search: event.target.value })
    var elm=document.getElementsByTagName('li')
    console.log(elm)
    
    
    
}
  render() {
    const { recipes, search } = this.state
    const filterrecipe=recipes.filter(recipes=>{
      return recipes.name.toLowerCase().includes(search.toLowerCase())
    })
    return (!recipes.length ? <h1>Loading...</h1> :
      <div><Search searchChange={this.onSearch} />
        <CardList recipes={filterrecipe} /></div>)
  }
}

export default App;
