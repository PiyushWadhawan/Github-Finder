import { Link, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import Spinner from "./Spinner";
import {
  FaCodepen,
  FaEye,
  FaInfo,
  FaLink,
  FaStar,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const User = () => {
  const { user, repos, getUser, getUserRepos, loading } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.name);
    getUserRepos(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="user">
      <h3 className="back_home">
        <Link to="/" className="back_home">
          <span>
            <BiArrowBack />
          </span>
        </Link>
      </h3>
      <div className="profile">
        <div className="left">
          <img src={avatar_url} alt="profile_image" />
          <div className="user_name">
            <h3>{name}</h3>
            <p>{login}</p>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h1>{name}</h1>
            <p className="title_type">{type}</p>
            {hireable ? (
              <p className="title_hireable">hireable</p>
            ) : (
              <p className="title_non_hireable">not hireable</p>
            )}
          </div>
          <div className="bio">
            <p>{bio}</p>
          </div>
          <a
            className="github_link"
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Github Profile
          </a>
          <div className="socials">
            <div className="social">
              <p className="social_title">Location</p>
              <p className="social_value">{location ? location : "N/A"}</p>
            </div>
            <div className="social social_border">
              <p className="social_title">Website</p>
              <p className="social_value">{blog ? blog : "N/A"}</p>
            </div>
            <div className="social social_border">
              <p className="social_title">X (formerly Twitter)</p>
              <p className="social_value">
                {twitter_username ? twitter_username : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="statistics">
        <div className="stats">
          <div className="stats_info">
            <p className="social_title">Followers</p>
            <h1 className="stats_value">{followers}</h1>
          </div>
          <div className="stats_icon">
            <FaUsers />
          </div>
        </div>
        <div className="stats social_border">
          <div className="stats_info">
            <p className="social_title">Following</p>
            <h1 className="stats_value">{following}</h1>
          </div>
          <div className="stats_icon">
            <FaUserFriends />
          </div>
        </div>
        <div className="stats social_border">
          <div className="stats_info">
            <p className="social_title">Public Repos</p>
            <h1 className="stats_value">{public_repos}</h1>
          </div>
          <div className="stats_icon">
            <FaCodepen />
          </div>
        </div>
        <div className="stats social_border">
          <div className="stats_info">
            <p className="social_title">Public Gists</p>
            <h1 className="stats_value">{public_gists}</h1>
          </div>
          <div className="stats_icon">
            <FaStore />
          </div>
        </div>
      </div>
      <div className="repos">
        <h2>Latest Repositories</h2>
        {repos.map((repo, index) => {
          const {
            name,
            description,
            html_url,
            forks,
            open_issues,
            watchers_count,
            stargazers_count,
          } = repo;
          return (
            <div className="repo" key={index}>
              <div className="repo_content">
                <h3>
                  <a href={html_url} target="_blank" rel="noreferrer">
                    <FaLink /> {name}
                  </a>
                </h3>
                <p>{description}</p>
                <div className="repo_details">
                  <div className="repo_details_1">
                    <FaEye /> {watchers_count}
                  </div>
                  <div className="repo_details_2">
                    <FaStar /> {stargazers_count}
                  </div>
                  <div className="repo_details_3">
                    <FaInfo /> {open_issues}
                  </div>
                  <div className="repo_details_4">
                    <FaUtensils /> {forks}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
