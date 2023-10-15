import { CANVAS_SIZE } from "../constants";
import useCanvas from "../hooks/useCanvas";

const PointLine = ({ cnt }) => {
  const animate = (ctx) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (cnt) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.3;

      const pointCenterX = window.innerWidth / 2;
      const pointCenterY = window.innerHeight * 0.75;

      for (let i = 0; i < cnt.length; i++) {
        let canvasWidth = CANVAS_SIZE[cnt[i].shape].width / 2;
        let canvasHeight = CANVAS_SIZE[cnt[i].shape].height + 8;
        if (cnt[i].shape === "circle") {
          canvasHeight = 115;
        }
        if (cnt[i].shape === "flower") {
          canvasHeight = 128;
        }

        let x = cnt[i].position?.x + canvasWidth;
        let y = cnt[i].position?.y + canvasHeight;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(pointCenterX, pointCenterY);
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  const canvasRef = useCanvas(window.innerWidth, window.innerHeight, animate);

  return <canvas ref={canvasRef} />;
};
export default PointLine;
