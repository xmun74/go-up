import { CANVAS_SIZE, COLORS } from "../constants";
import Bear from "./shapes/Bear";
import Flower from "./shapes/Flower";
import Heart from "./shapes/Heart";
import Circle from "./shapes/Circle";

const BalloonDetail = ({ color }) => {
  return (
    <>
      <div
        style={{ background: color === "brown" ? "#F37613" : COLORS[color] }}
        className={`absolute bottom-[-10px] left-[45%] w-[10px] h-[10px] rounded-b-full border border-black`}
      />
    </>
  );
};

const Balloon = ({ color, shape, position, onClick }) => {
  const renderShape = (shape) => {
    switch (shape) {
      case "flower":
        return (
          <Flower
            position={position}
            onClick={onClick}
            canvasSize={CANVAS_SIZE["flower"]}
          />
        );
      case "bear":
        return (
          <Bear position={position} onClick={onClick}>
            <BalloonDetail color={"brown"} />
          </Bear>
        );
      case "heart":
        return (
          <Heart position={position} onClick={onClick}>
            <BalloonDetail color={"red"} />
          </Heart>
        );
      default:
        return (
          <Circle position={position} onClick={onClick} color={color}>
            <BalloonDetail color={color} />
          </Circle>
        );
    }
  };

  return <div className={`absolute`}>{renderShape(shape)}</div>;
};
export default Balloon;
