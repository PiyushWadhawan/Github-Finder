import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="list-item">
      <div className="list-image">
        <img className="avatar-image" src={user.avatar_url} alt="" />
      </div>
      <div className="list-content">
        <span className="name">{user.login}</span>
        <Link className="profile-link" to={`/users/${user.login}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
