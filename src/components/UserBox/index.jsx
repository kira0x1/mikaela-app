import { Link } from "react-router-dom";
import "./index.scss";

export default function UserBox({ user }) {
  return (
    <Link className="user-box">
      <div className="user-name">{user.username}</div>
      <div className="user-tag">
        <span className="user-data-title">tag: </span>
        {user.tag}
      </div>
      <div className="song-info">
        <span className="user-data-title">songs: </span>
        {user.favorites.length}
      </div>
      <div className="id-info">
        <span className="user-data-title">id: </span>
        {user.id}
      </div>
    </Link>
  );
}
