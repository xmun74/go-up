import { useEffect, useRef } from "react";
import { CANVAS_SIZE } from "../../constants";

const Heart = ({ position, onClick, children }) => {
  const { width, height } = CANVAS_SIZE["heart"];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    ctx.translate(-19, -19);
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

    ctx.fillStyle = "#FF0000";
    ctx.fill();

    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.stroke();
  }, [height, width]);
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative w-[115px] h-[100px]`}
      onClick={onClick}
    >
      <canvas ref={canvasRef} />
      {children}
    </div>
  );
};
export default Heart;
