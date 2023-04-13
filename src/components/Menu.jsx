import "./Menu.css";
import tetris from "./assets/images/tetris.jpg";

export default function Menu({ onClick }) {
  return (
    <div className="menu">
      <img className="logo" src={tetris} />
      <button className="button" onClick={onClick}>
        Start
      </button>
    </div>
  );
}
