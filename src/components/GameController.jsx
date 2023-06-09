import "./GameController.css";
import { Action, actionForKey, actionIsDrop } from "./business/Input";
import { playerController } from "./business/PlayerController";

import { useDropTime } from "./hooks/useDropTime";
import { useInterval } from "./hooks/useInterval";

export default function GameController({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  });

  useInterval(() => {
    const gameControllerInput = document.querySelector(".GameController");
    gameControllerInput.focus();
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({ action, board, player, setPlayer, setGameOver });
  };

  return (
    <>
      <h5 className="h5">Press "P" to pause or "Q" to quit</h5>
      <input
        className="GameController"
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus
      />
    </>
  );
}
