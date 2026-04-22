import { useState } from "react";
import useStore from "./store";

function App() {
  const [input, setInput] = useState("");
  const user = useStore((state) => state.user);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const fetchUser = useStore((state) => state.fetchUser);
  const repos = useStore((state) => state.repos);
  return (
    <div className="app">
      <h1 className="app-title">🐙 GitHub Profile Viewer</h1>
      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Github Username"
          value={input}
          onChange={(e) => setInput(e.target.value.replace(/\s/g, ""))}
        />
        <button className="search-btn" onClick={() => fetchUser(input)}>
          Search
        </button>
      </div>
      {/* Profile Card */}
      {user ? (
        <div className="profile-card">
          <img src={user.avatar} alt="avatar" className="avatar" />
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-username">{user.username}</p>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-value">{user.repos}</span>
                <span className="stat-label">Repos</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.following}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
            <a href={user.url} className="profile-link">
              View on Github ↗
            </a>
          </div>
        </div>
      ) : (
        <p className="status-text">Search for a Github User</p>
      )}

      {/* repos */}
      <h3 className="repos-title">Repositories</h3>
      <div className="repos-list">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            className="repo-card"
            target="_blank"
          >
            <h4 className="repo-name">{repo.name}</h4>
            <p className="repo-desc">{repo.description}</p>
            <div className="repo-meta">
              <span className="repo-lang">{repo.language}</span>
              <span className="repo-stars">⭐ {repo.stars}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default App;
