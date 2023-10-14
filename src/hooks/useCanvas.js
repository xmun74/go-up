import { useEffect, useRef } from "react";

const useCanvas = (canvasWidth, canvasHeight) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext("2d");

    const setCanvasScale = () => {
      const scale = window.devicePixelRatio;

      if (canvas && ctx) {
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        canvas.width = canvasWidth * scale;
        canvas.height = canvasHeight * scale;

        ctx.scale(scale, scale);
      }
    };
    setCanvasScale();
  }, [canvasWidth, canvasHeight]);
  return canvasRef;
};
export default useCanvas;
