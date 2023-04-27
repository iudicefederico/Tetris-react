import "./Menu.css";
import tetris from "./assets/images/tetris.jpg";

export default function Menu() {
  return (
    <div className="menu">
      <img className="logo" src={tetris} />
      <button className="button">Press Enter key to start</button>
    </div>
  );
}
