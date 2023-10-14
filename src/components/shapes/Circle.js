import useCanvas from "../../hooks/useCanvas";
import { CANVAS_SIZE, COLORS } from "../../constants";

const Circle = ({ position, onClick, color, children }) => {
  const { width, height } = CANVAS_SIZE["circle"];

  const drawCanvas = (ctx) => {
    var grd = ctx.createLinearGradient(20, 10, 50, 50);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, COLORS[color]);

    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.bezierCurveTo(90, 0, 120, 85, 47, 111);
    ctx.bezierCurveTo(-10, 100, -10, 0, 47, 0);
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.lineWidth = "1.2";
    ctx.strokeStyle = "black";
    ctx.stroke();
  };

  const canvasRef = useCanvas(width, height, drawCanvas);

  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative w-24 h-28 border border-black`}
      onClick={onClick}
    >
      <canvas ref={canvasRef} />
      {children}
    </div>
  );
};
export default Circle;
