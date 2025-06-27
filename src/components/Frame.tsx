import { useEffect, useState } from "react";

interface FrameProps {
  children: any;
  frameName: string;
}

const Frame = ({ children, frameName }: FrameProps) => {
  const [size, setSize] = useState({
    width: window.innerWidth - 400,
    height: window.innerHeight - 300,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth - 400,
        height: window.innerHeight - 300,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="frame"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
    >
      <div className="frame__name">{frameName}</div>
      <div className="frame__size">
        {size.width} x {size.height}
      </div>
      <div className="frame__container">{children}</div>

      <div className="block block-1"></div>
      <div className="block block-2"></div>
      <div className="block block-3"></div>
      <div className="block block-4"></div>
    </div>
  );
};

export default Frame;
