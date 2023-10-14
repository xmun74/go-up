import { COLORS } from "../constants";
import Bear from "./shapes/Bear";
import Flower from "./shapes/Flower";
import Heart from "./shapes/Heart";
import Circle from "./shapes/Circle";

const BallonDetail = ({ color }) => {
  let seletedColor = "";
  if (color === "brown") seletedColor = "#F37613";
  else seletedColor = COLORS[color];

  return (
    <>
      <div
        style={{ background: seletedColor }}
        className={`absolute bottom-[-10px] left-[45%] w-[10px] h-[10px] rounded-b-full border border-black`}
      />
      <div className="absolute bottom-[-110px] left-[49%] w-[1.5px] h-[100px] bg-black" />
    </>
  );
};

const Balloon = ({ color, shape, position, onClick }) => {
  const renderShape = (shape) => {
    switch (shape) {
      case "flower":
        return <Flower position={position} onClick={onClick} />;
      case "bear":
        return (
          <Bear position={position} onClick={onClick}>
            <BallonDetail color={"brown"} />
          </Bear>
        );
      case "heart":
        return (
          <Heart position={position} onClick={onClick}>
            <BallonDetail color={"red"} />
          </Heart>
        );
      default:
        return (
          <Circle position={position} onClick={onClick} color={color}>
            <BallonDetail color={color} />
          </Circle>
        );
    }
  };

  return <div className={`absolute`}>{renderShape(shape)}</div>;
};
export default Balloon;
