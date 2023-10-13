import { COLORS } from "../constants";
import Bear from "./shapes/Bear";
import Flower from "./shapes/Flower";
import Heart from "./shapes/Heart";
import Lettering from "./shapes/Lettering";

const BallonDetail = ({ color }) => (
  <>
    <div
      style={{ background: `${COLORS[color]}` }}
      className={`absolute bottom-[-10px] left-[45%] w-[10px] h-[10px] rounded-b-full border border-black`}
    />
    <div className="absolute bottom-[-110px] left-[49%] w-[1.5px] h-[100px] bg-black" />
  </>
);

const Balloon = ({ color, shape, position, onClick }) => {
  const gradientStyle = `radial-gradient(#d9d9d9 0.1px, ${COLORS[color]}, ${COLORS[color]},  ${COLORS[color]})`;

  const renderShape = (shape) => {
    switch (shape) {
      case "flower":
        return (
          <Flower>
            <BallonDetail color={color} />
          </Flower>
        );
      case "bear":
        return (
          <Bear>
            <BallonDetail color={color} />
          </Bear>
        );
      case "heart":
        return (
          <Heart>
            <BallonDetail color={color} />
          </Heart>
        );
      case "lettering":
        return (
          <Lettering>
            <BallonDetail color={color} />
          </Lettering>
        );
      default:
        return (
          <div
            style={{
              background: gradientStyle,
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
            className={`relative w-24 h-28 rounded-full border border-black`}
            onClick={onClick}
          >
            <BallonDetail color={color} />
          </div>
        );
    }
  };

  return <div className={`absolute`}>{renderShape(shape)}</div>;
};
export default Balloon;
