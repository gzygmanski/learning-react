import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  state = { term: ''};
  // onInputChange(event) {
  //   console.log('event.target.value: ', event.target.value);
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.state.term: ', this.state.term);
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <label htmlFor="field">Image Search:</label>
          <input
            className="field"
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({term: e.target.value})}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
