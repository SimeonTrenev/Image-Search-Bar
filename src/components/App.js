import React from "react";
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SeachBar from "./SearchBar";
import ImageList from './ImageList'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = { images: [] }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

   

async onSearchSubmit(term){
   const response = await unsplash.get('/search/photos', {
    params: {query: term},    
    });
    // .then(response => console.log(response.data.results))
    
    this.setState({ images: response.data.results })
}

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
