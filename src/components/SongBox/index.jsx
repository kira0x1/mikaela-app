import "./index.scss";

export default function SongBox({ song }) {
  return (
    <a rel="noreferrer" target="_blank" href={song.url} className="song-box">
      {song.title}
    </a>
  );
}
