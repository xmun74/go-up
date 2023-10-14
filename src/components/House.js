import useCanvas from "../hooks/useCanvas";

const House = ({ onClick }) => {
  const darkgray = "#2D302F";
  const drawCanvas = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.lineTo(300, 40);
    ctx.lineTo(320, 250);
    ctx.lineTo(0, 250);
    ctx.closePath();
    ctx.fillStyle = darkgray;
    ctx.lineWidth = "4";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(10, 40);
    ctx.lineTo(110, 20);
    ctx.lineTo(210, 20);
    ctx.lineTo(310, 40);
    ctx.lineTo(313, 70);
    ctx.lineTo(6, 70);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(6, 55);
    ctx.lineTo(314, 55);
    ctx.lineTo(315, 70);
    ctx.lineTo(5, 70);
    ctx.closePath();
    ctx.fillStyle = darkgray;
    ctx.fill();
    ctx.lineWidth = "1.5";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(260, 20);
    ctx.lineTo(280, 250);
    ctx.lineTo(40, 250);
    ctx.closePath();
    ctx.fillStyle = darkgray;
    ctx.fill();
    ctx.fillStyle = "#090304";
    ctx.lineWidth = "2";
    ctx.stroke();

    //지붕
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(110, 0);
    ctx.lineTo(210, 0);
    ctx.lineTo(280, 20);
    ctx.lineTo(280, 50);
    ctx.lineTo(40, 50);
    ctx.closePath();
    ctx.fillStyle = darkgray;
    ctx.fill();
    ctx.fillStyle = "#090304";
    ctx.lineWidth = "2";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40, 24);
    ctx.lineTo(110, 4);
    ctx.lineTo(210, 4);
    ctx.lineTo(280, 24);
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.stroke();

    // 큰 창문
    ctx.beginPath();
    ctx.moveTo(71, 100);
    ctx.lineTo(249, 100);
    ctx.lineTo(250, 150);
    ctx.lineTo(70, 150);
    ctx.closePath();
    ctx.fillStyle = "#F8BB12";
    ctx.strokeStyle = "red";
    ctx.lineWidth = "5";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(70, 103);
    ctx.fillStyle = "#F8BB12";
    ctx.bezierCurveTo(80, 50, 240, 50, 250, 103);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(120, 68, 5, 83);
    ctx.fillRect(190, 68, 5, 83);
    ctx.fillRect(70, 120, 180, 5);
    ctx.fill();

    // 작은 창문
    ctx.beginPath();
    ctx.moveTo(71, 190);
    ctx.lineTo(130, 190);
    ctx.lineTo(130, 245);
    ctx.lineTo(70, 245);
    ctx.closePath();
    ctx.moveTo(190, 190);
    ctx.lineTo(250, 190);
    ctx.lineTo(250, 245);
    ctx.lineTo(190, 245);
    ctx.closePath();
    ctx.fillStyle = "#F8BB12";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(70, 193);
    ctx.bezierCurveTo(80, 160, 120, 160, 131, 193);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(189, 193);
    ctx.bezierCurveTo(200, 163, 240, 163, 249, 193);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(97, 168, 5, 78);
    ctx.fillRect(217, 168, 5, 78);
    ctx.fillRect(71, 200, 60, 5);
    ctx.fillRect(71, 220, 60, 5);
    ctx.fillRect(191, 200, 60, 5);
    ctx.fillRect(191, 220, 60, 5);
    ctx.fill();
  };
  const canvasRef = useCanvas(320, 250, drawCanvas);

  return (
    <div
      className={`absolute bottom-0 left-1/3 flex justify-center items-center bg-inherit`}
    >
      <canvas ref={canvasRef} onClick={onClick} />
    </div>
  );
};
export default House;
