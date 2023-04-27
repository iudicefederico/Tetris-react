import { useGameOver } from "./hooks/useGameOver.js";
import Menu from "./Menu";
import Tetris from "./Tetris";
import { useEffect } from "react";

export default function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        start();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="game">
      {gameOver ? (
        <Menu />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
