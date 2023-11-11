import React, { useContext, useState } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const { users } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      setText("");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={handleChange}
            className="search-bar"
          />
          <button type="submit" className="go-btn">
            Go
          </button>
        </div>
      </form>
      <div className="clear-btn-div">
        {users.length > 0 && <button className="clear-btn">Clear</button>}
      </div>
    </div>
  );
};

export default UserSearch;
