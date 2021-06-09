import React from "react";

class SearchBar extends React.Component {

    // constructor(props){
    //     super(props)

    // //    this.onFormSubmit = this.onFormSubmit.bind(this)
    // }

  state = { term: "" };

//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   onFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.term)
//   }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
          <div className="field">
            <label>Image Search: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
