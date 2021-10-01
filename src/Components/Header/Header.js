import React from 'react';
import './header.css';
import atomic from './atomic-structure.svg';

const Header = ({ searchWord, handleSearch }) => {
  return (
    <div className="header">
      <img src={atomic} alt="Girl in a jacket" className="logo"></img>
      <input
        type="text"
        value={searchWord}
        onChange={handleSearch}
        placeholder="search.."
      ></input>
    </div>
  );
};

export default Header;
