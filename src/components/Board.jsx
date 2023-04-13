import "./Board.css";
import BoardCell from "./BoardCell";

export default function Board({ board }) {
  return (
    <div
      className="board"
      style={{
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
      }}
    >
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={(x = board.size.columns + x)} cell={cell} />
        ))
      )}
    </div>
  );
}
