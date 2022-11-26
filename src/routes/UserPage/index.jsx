import "./index.scss";
import { useParams } from "react-router-dom";
import UsersData from "../../users.json";
import SongBox from "../../components/SongBox";

export default function UserPage(props) {
  const params = useParams();
  const user = UsersData.find((u) => u.id === params.id);
  console.log(user.favorites[0]);
  return (
    <div className="user-page">
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

      <div className="songs-container">
        {user.favorites.map((f) => {
          return <SongBox key={f.id} song={f} />;
        })}
      </div>
    </div>
  );
}
