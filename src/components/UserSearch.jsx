import React, { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import Alert from "./Alert";

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClearUsers = () => {
    clearUsers();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form" id="search_form">
        <Alert />
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={handleChange}
            className="search-bar"
            id="searchbox"
          />
          <button type="submit" className="go-btn">
            Go
          </button>
        </div>
      </form>
      <div className="clear-btn-div">
        {users.length > 0 && (
          <button className="clear-btn" onClick={handleClearUsers}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
