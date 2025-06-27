import Tilt from "react-parallax-tilt";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Фоновая сетка, двигается за мышью */}
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.0}
        transitionSpeed={2500}
        glareEnable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "110vw", // чуть больше экрана, чтобы не обрезался
          height: "110vh",
          zIndex: 0,
        }}
      >
        <div className="main" />
      </Tilt>

      {/* Основной контент поверх */}
      <div className="tempNameClass">{children}</div>
    </div>
  );
};

export default Main;
