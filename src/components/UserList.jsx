import { useContext } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const UserList = () => {
  const { users, loading } = useContext(GithubContext);

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
