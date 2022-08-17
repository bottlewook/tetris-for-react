import GridSqure from "./GridSquare";

const NextBlock = () => {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSqure key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="next-block">{grid}</div>;
};

export default NextBlock;
