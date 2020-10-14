import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search:</label>
            <input type="text" placeholder="type here..." value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
