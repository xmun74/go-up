import { CANVAS_SIZE } from "../constants";
import useCanvas from "../hooks/useCanvas";

const PointLine = ({ cnt }) => {
  //   let radian;
  //   const VELOCITY = 0.005;
  //   radian += VELOCITY;

  const animate = (ctx) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (cnt) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.3;

      const pointCenterX = window.innerWidth / 2;
      const pointCenterY = window.innerHeight * 0.7;

      for (let i = 0; i < cnt.length; i++) {
        let canvasWidth = CANVAS_SIZE[cnt[i].shape].width / 2;
        let canvasHeight = CANVAS_SIZE[cnt[i].shape].height + 8;
        if (cnt[i].shape === "circle") {
          canvasHeight = 115;
        }
        if (cnt[i].shape === "flower") {
          canvasHeight = 128;
        }

        ctx.moveTo(
          cnt[i].position?.x + canvasWidth,
          cnt[i].position?.y + canvasHeight
        );
        ctx.lineTo(pointCenterX, pointCenterY);
        ctx.stroke();
      }
    }
  };

  const canvasRef = useCanvas(window.innerWidth, window.innerHeight, animate);

  return <canvas ref={canvasRef} />;
};
export default PointLine;
