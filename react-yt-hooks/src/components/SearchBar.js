import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="">Video Search:</label>
          <input type="text" placeholder="type here..." value={term} onChange={onInputChange}/>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
