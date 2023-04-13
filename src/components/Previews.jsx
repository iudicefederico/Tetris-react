import Preview from "./Preview";
import "./Previews.css";

export default function Previews({ tetrominoes }) {
  // We want everything except the last one
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();
  return (
    <div className="previews">
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  );
}
