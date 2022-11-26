import "./index.scss";
import { useParams } from "react-router-dom";
import UsersData from "../../users.json";

export default function UserPage(props) {
  const params = useParams();
  const user = UsersData.find((u) => u.id === params.id);
  return (
    <div className="user-container">
      <div className="username-text">{user.username}</div>
      <div className="text-container">
        <div>
          <span className="data-title">id: </span>
          {params.id}
        </div>
        <div>
          <span className="data-title">favorites: </span>
          {user.favorites.length}
        </div>
      </div>
    </div>
  );
}
