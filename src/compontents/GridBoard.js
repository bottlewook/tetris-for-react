import GridSqure from "./GridSquare";

const GridBoard = () => {
  const grid = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]); // [[], []. []] 추가
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSqure key={`${col}${row}`} color={"1"} />);
    }
  }
  return <div className="grid-board">{grid}</div>;
};

export default GridBoard;
