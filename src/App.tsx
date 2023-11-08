import img1 from "./assets/img-bg.jpg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [blurLevelCount, setBlurLevelCount] = useState<number>(0);
  const [blurLevel, setBlurLevel] = useState<number>(15);

  useEffect(() => {
    const interval = setInterval(() => {
      if (blurLevelCount < 100) {
        setBlurLevelCount(blurLevelCount + 1);
        setBlurLevel(blurLevel - 0.15);
        console.log(blurLevelCount / 100);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [blurLevelCount]);

  return (
    <>
      <div id="Blurry" style={{ filter: `blur(${blurLevel}px)` }}>
        <img src={img1} alt="" />
      </div>
      {blurLevelCount < 100 && (
        <div id="Overlay-blur">
          <p
            className="text-overlay"
            style={{ opacity: 1 - blurLevelCount / 130 }}
          >
            {blurLevelCount}%
          </p>
        </div>
      )}
    </>
  );
}

export default App;
