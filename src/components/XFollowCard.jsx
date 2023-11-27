import { useState } from "react";

export function XFollowCard({ userName, user, initialIsFollowing }) {
  const imgSrc = `https://robohash.org/${user}`;
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const textButton = isFollowing ? "Following" : "Follow";
  const buttonClassname = isFollowing
    ? "x-follow-card-button is-Following"
    : "x-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="x-follow-card">
      <header className="x-follow-card-header">
        <img
          className="x-follow-card-avatar"
          alt="Avatar of Elon Musk"
          src={imgSrc}
        />
        <div className="x-follow-card-info">
          <strong>{userName}</strong>
          <span className="x-follow-card-info-username">@{user}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className="x-follow-card-button-text">{textButton}</span>
          <span className="x-follow-card-button-stop-Following">Stop Following</span>
        </button>
      </aside>
    </article>
  );
}
