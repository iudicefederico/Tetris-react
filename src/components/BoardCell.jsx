import "./BoardCell.css";

const BoardCell = ({ cell }) => (
  <div className={`boardCell ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;
