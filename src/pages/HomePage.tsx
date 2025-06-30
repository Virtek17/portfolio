import { useEffect, useState } from "react";
import photo from "../assets/photo.png";
import clsx from "clsx";
import { useAppContext } from "../AppContext";

const HomePage = () => {
  const { textColorHEX } = useAppContext();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  return (
    <div className="page">
      <div className="text-block">
        <div className="text-block__header">
          <div className="bage" style={{ color: textColorHEX }}>
            Веб разработчик
          </div>
          <h1 className="text-block__title" style={{ color: textColorHEX }}>
            Илья Твердохлеб
          </h1>
        </div>
        <div className="text-block__footer">
          <p className="text-block__text" style={{ color: textColorHEX }}>
            Сайты под ключ
          </p>
          <p className="text-block__text" style={{ color: textColorHEX }}>
            Быстро, чисто, с умом
          </p>
        </div>
      </div>
      <div className="page__photo">
        <img
          src={photo}
          alt="photo"
          className={clsx("photo", open ? "photoOpen" : "")}
        />
      </div>
    </div>
  );
};

export default HomePage;
