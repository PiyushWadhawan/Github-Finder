import { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/GithubContext";

const UserList = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="lists">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserList;
