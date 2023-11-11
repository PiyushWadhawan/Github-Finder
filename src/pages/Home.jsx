import React from "react";
import UserList from "../components/UserList";
import UserSearch from "../components/UserSearch";

const Home = () => {
  return (
    <div className="home">
      <UserSearch />
      <UserList />
    </div>
  );
};

export default Home;
