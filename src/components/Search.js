import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate(); // Rename the variable to 'navigate'

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value
    }
    const queryString = new URLSearchParams(query).toString();

    navigate('/articles?' + queryString); // Call navigate with the desired path and search parameters
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
