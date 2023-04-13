import { useGameOver } from "./hooks/useGameOver.js";
import Menu from "./Menu";
import Tetris from "./Tetris";

export default function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
  }

  return (
    <div className="game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
