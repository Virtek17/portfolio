import { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";

interface FrameProps {
  children: any;
  frameName: string;
}

const Frame = ({ children, frameName }: FrameProps) => {
  const { colorHEX, decorColorHEX } = useAppContext();

  const [size, setSize] = useState({
    width:
      window.innerWidth <= 540
        ? window.innerWidth - 50
        : window.innerWidth <= 768
        ? window.innerWidth - 150
        : window.innerWidth - 400,
    height: window.innerWidth <= 900 ? 500 : 700,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width:
          window.innerWidth <= 540
            ? window.innerWidth - 50
            : window.innerWidth <= 768
            ? window.innerWidth - 150
            : window.innerWidth - 400,
        height: window.innerWidth <= 900 ? 500 : 700,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="frame__container ">
      <div
        className="frame frame-row"
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          backgroundColor: `${colorHEX}`,
        }}
      >
        <div
          className="frame__glow-1"
          style={{ backgroundColor: decorColorHEX }}
        ></div>
        <div
          className="frame__glow-2"
          style={{ backgroundColor: decorColorHEX }}
        ></div>

        {children}
      </div>
      <div className="block block-1"></div>
      <div className="block block-2"></div>
      <div className="block block-3"></div>
      <div className="block block-4"></div>
      <div className="frame__name">{frameName}</div>
      <div className="frame__size">
        {size.width} x {size.height}
      </div>
    </div>
  );
};

export default Frame;
