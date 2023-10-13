import { useState } from "react";
import Balloon from "../components/Balloon";
import House from "../components/House";
import { COLORS, SHAPES } from "../constants";

/** 색, 모양 랜덤 */
const getRandomIndex = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return randomIdx;
};
/** 위치 랜덤 */
const getRandomPosition = () => {
  const x = Math.random() * window.innerWidth - 96;
  const y = Math.random() * window.innerHeight * 0.4;
  return { x, y };
};

const Main = () => {
  const COLORTYPE = Object.keys(COLORS);
  const initBalloonCnt = 10;
  const initBalloons = Array.from({ length: initBalloonCnt }, (_, i) => ({
    id: i,
    color: COLORTYPE[getRandomIndex(COLORTYPE)],
    shape: SHAPES[getRandomIndex(SHAPES)],
    position: getRandomPosition(),
  }));
  const [balloonCnt, setBalloonCnt] = useState(initBalloons);

  const handleAddBalloon = () => {
    const newBalloon = {
      id: new Date().getTime(),
      color: COLORTYPE[getRandomIndex(COLORTYPE)],
      shape: SHAPES[getRandomIndex(SHAPES)],
      position: getRandomPosition(),
    };
    setBalloonCnt([...balloonCnt, newBalloon]);
  };

  const handleDeleteBalloon = (b) => {
    const filtered = balloonCnt.filter((e) => e.id !== b);
    setBalloonCnt(filtered);
  };

  return (
    <main className="relative w-screen h-screen bg-gradient-to-t from-[#45BCFB] to-[#5CECFF]">
      <section className="relative flex w-full">
        {balloonCnt.map((v) => (
          <Balloon
            key={v.id}
            color={v.color}
            shape={v.shape}
            position={v.position}
            onClick={() => handleDeleteBalloon(v.id)}
          />
        ))}
      </section>

      <House onClick={handleAddBalloon} />
    </main>
  );
};
export default Main;
