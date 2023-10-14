import { useEffect, useRef } from "react";

const useCanvas = (canvasWidth, canvasHeight, animate) => {
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

    let requestId;
    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation);
      if (ctx && animate) {
        animate(ctx);
      }
    };
    requestAnimation();

    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, [canvasWidth, canvasHeight, animate]);
  return canvasRef;
};
export default useCanvas;
