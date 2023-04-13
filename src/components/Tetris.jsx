import "./Tetris.css";
import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import { useBoard } from "./hooks/useBoard";
import { useGameStats } from "./hooks/useGameStats";
import { usePlayer } from "./hooks/usePlayer";
import GameController from "./GameController";

export default function Tetris({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="tetris">
      <div className="leftRow">
        <Board board={board} />
      </div>
      <div className="rightRow">
        <Previews tetrominoes={player.tetrominoes} />
        <GameStats gameStats={gameStats} />
        <GameController
          board={board}
          gameStats={gameStats}
          player={player}
          setGameOver={setGameOver}
          setPlayer={setPlayer}
        />
      </div>
    </div>
  );
}
