import { CANVAS_SIZE } from "../../constants";
import useCanvas from "../../hooks/useCanvas";

const Bear = ({ position, onClick, children }) => {
  const { width, height } = CANVAS_SIZE["bear"];

  const drawCanvas = (ctx) => {
    //테두리
    ctx.beginPath();
    ctx.ellipse(40, 48, 35, 30, 0, 0, Math.PI * 2);
    ctx.arc(14, 25, 12, 0, Math.PI * 2);
    ctx.arc(66, 25, 12, 0, Math.PI * 2);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.stroke();

    // 얼굴
    ctx.beginPath();
    ctx.ellipse(40, 48, 35, 30, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#F37613";
    ctx.fill();

    // 왼쪽 귀
    ctx.beginPath();
    ctx.arc(14, 25, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#F37613";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(15, 28, 6, 6, -10, 0, Math.PI);
    ctx.fillStyle = "brown";
    ctx.fill();

    // 오른쪽 귀
    ctx.beginPath();
    ctx.arc(66, 25, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#F37613";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(65, 28, 6, 6, 10, 0, Math.PI);
    ctx.fillStyle = "brown";
    ctx.fill();

    // 왼쪽 눈
    ctx.beginPath();
    ctx.arc(30, 45, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // 오른쪽 눈
    ctx.beginPath();
    ctx.arc(50, 45, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.ellipse(40, 51, 4, 3, 0, 0, Math.PI * 2);
    ctx.rect(39, 49, 2, 7);
    ctx.fillStyle = "black";
    ctx.fill();

    // 입
    ctx.beginPath();
    ctx.arc(36, 55, 3, 0, Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(44, 55, 3, 0, Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(40, 51);
    ctx.arc(40, 58, 3, 0, Math.PI, false);
    ctx.fill();
  };

  const canvasRef = useCanvas(width, height, drawCanvas);

  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative w-20 h-20`}
      onClick={onClick}
    >
      <canvas ref={canvasRef} />
      {children}
    </div>
  );
};
export default Bear;
