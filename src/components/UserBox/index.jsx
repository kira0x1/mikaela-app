import { Link } from "react-router-dom";
import "./index.scss";

export default function UserBox({ user }) {
  return (
    <Link className="user-box">
      <span className="user-name">{user.username}</span>
      <br />
      <span className="song-info">songs: {user.favorites.length}</span>
      <br />
      <span className="id-info">id: {user.id}</span>
    </Link>
  );
}
