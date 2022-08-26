import GridSquare from "./GridSquare";
import { useSelector } from "react-redux";
import { shapes } from "../utils/index";

// const GridBoard = () => {
//   const game = useSelector((state) => state.game);
//   const { grid, shape, rotation, x, y, isRunning, speed } = game;
//   const grid = [];
//   for (let row = 0; row < 18; row++) {
//     grid.push([]); // [[], []. []] 추가
//     for (let col = 0; col < 10; col++) {
//       grid[row].push(<GridSqure key={`${col}${row}`} color={"1"} />);
//     }
//   }
//   return <div className="grid-board">{grid}</div>;
// };

// export default GridBoard;

export default function GridBoard(props) {
  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;

  const block = shapes[shape][rotation];
  const blockColor = shape; //숫자
  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x; // 0 ~ 4
      const blockY = row - y; // 4 ~ 21
      let color = square;

      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }
      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Generate a grid square
      return <GridSquare key={k} color={color} />;
    });
  });

  return <div className="grid-board">{gridSquares}</div>;
}
