import { useEffect, useRef } from "react";
import { CANVAS_SIZE } from "../../constants";

const Flower = ({ position, onClick }) => {
  const { width, height } = CANVAS_SIZE["flower"];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    ctx.translate(-8, -10);

    let petalRadius = 20;
    let petalDistance = 40;

    // 풍선 밑
    ctx.beginPath();
    ctx.ellipse(75, 114, 5, 23, 0, 0, Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = "0.7";
    ctx.strokeStyle = "black";
    ctx.stroke();

    // 꽃잎 테두리
    for (let i = 0; i < 360; i += 60) {
      let radian = i * (Math.PI / 180);
      let x = petalDistance * Math.cos(radian) + 75;
      let y = petalDistance * Math.sin(radian) + 75;

      ctx.beginPath();
      ctx.ellipse(x, y, petalRadius * 1.3, petalRadius, radian, 0, Math.PI * 2);
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.stroke();
    }

    // 꽃잎
    for (let i = 0; i < 360; i += 60) {
      let radian = i * (Math.PI / 180);
      let x = petalDistance * Math.cos(radian) + 75;
      let y = petalDistance * Math.sin(radian) + 75;

      ctx.beginPath();
      ctx.ellipse(x, y, petalRadius * 1.3, petalRadius, radian, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }

    // 얼굴 원
    ctx.beginPath();
    ctx.arc(75, 75, 28, 0, Math.PI * 2, true);
    var grd = ctx.createLinearGradient(50, 55, 80, 80);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#FBD109");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();
    // 입 (시계 방향)
    ctx.beginPath();
    ctx.arc(75, 78, 17, 0, Math.PI, false);
    ctx.lineWidth = "2";
    ctx.stroke();
    // 왼쪽 눈
    ctx.beginPath();
    ctx.ellipse(69, 68, 2, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    // 오른쪽 눈
    ctx.beginPath();
    ctx.ellipse(81, 68, 2, 6, 0, 0, Math.PI * 2);
    ctx.fill();
  }, [height, width]);
  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={`relative w-[135px] h-[130px]`}
      onClick={onClick}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
export default Flower;
