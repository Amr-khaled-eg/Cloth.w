import React from "react";
import "./Search.css";
import Button from "../Button/Button";
const Search = ({ onChange, onSearch }) => {
  return (
    <>
      <input
        type="search"
        className="search"
        placeholder="Search..."
        onChange={onChange}
      ></input>
      <Button onClick={onSearch}>Search</Button>
    </>
  );
};
export default Search;
