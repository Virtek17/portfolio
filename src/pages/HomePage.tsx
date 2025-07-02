import photo from "../assets/photo.png";
import clsx from "clsx";
import { useAppContext } from "../AppContext";
import "animate.css";
const HomePage = () => {
  const { textColorHEX, decorColorHEX } = useAppContext();

  return (
    <div className="page page__home">
      <div className="text-block">
        <div className={clsx("text-block__header")}>
          <div
            className={clsx(
              "bage animate__animated animate__bounceIn animate__delay-1s"
            )}
            style={{ color: textColorHEX }}
          >
            Веб разработчик
          </div>
          <h1
            className={clsx(
              "text-block__title animate__animated animate__backInLeft animate__delay-2s"
            )}
            style={{
              color: textColorHEX,
              textShadow: `7px 3px 5px ${decorColorHEX}`,
            }}
          >
            Илья Твердохлеб
          </h1>
        </div>
        <div className="text-block__footer">
          <p
            className="text-block__text animate__animated animate__bounceInDown animate__delay-2s"
            style={{ color: textColorHEX }}
          >
            Сайты под ключ
          </p>
          <div
            className="text-block__text"
            style={{ color: textColorHEX, display: "flex", gap: 16 }}
          >
            <div className=" animate__animated animate__bounceIn animate__delay-3s ">
              Быстро,
            </div>
            <div className=" animate__animated animate__bounceIn animate__delay-4s ">
              Чисто,
            </div>
            <div className=" animate__animated animate__bounceIn animate__delay-5s ">
              С умом
            </div>
          </div>
        </div>
      </div>
      <img
        src={photo}
        alt="photo"
        className={clsx(
          "photo animate__animated animate__zoomInDown animate__delay-5s"
        )}
      />
    </div>
  );
};

export default HomePage;
