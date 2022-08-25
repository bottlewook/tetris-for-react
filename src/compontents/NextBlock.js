import GridSqure from "./GridSquare";
import { useSelector } from "react-redux";
import { shapes } from "../utils/index";

const NextBlock = () => {
  const nextShape = useSelector((state) => state.game.nextShape);
  const box = shapes[nextShape][0];

  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSqure key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="next-block">{grid}</div>;
};

export default NextBlock;
