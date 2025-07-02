import { useEffect, useState } from "react";
import SvgIcon from "./SvgIcon";
import clsx from "clsx";

import { useLocation } from "react-router-dom";

const LeftPanel = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const getHeadings = () => {
    switch (location.pathname) {
      case "/":
        return [
          {
            label: "Frame",
            icon: "frame",
          },
          {
            label: "Веб разработчик",
            icon: "txt",
          },
          {
            label: "Илья Твердохлеб",
            icon: "txt",
          },
          {
            label: "Сайты под ключ",
            icon: "txt",
          },
          {
            label: "Быстро",
            icon: "txt",
          },
          {
            label: "Чисто",
            icon: "txt",
          },
          {
            label: "С умом",
            icon: "txt",
          },
          {
            label: "img",
            icon: "img",
          },
        ];
      case "/skills":
        return [
          {
            label: "Frame",
            icon: "frame",
          },
          {
            label: "Мой стэк",
            icon: "txt",
          },
          {
            label: "JavaScript",
            icon: "txt",
          },
          {
            label: "TypeScript",
            icon: "txt",
          },
          {
            label: "React",
            icon: "txt",
          },
          {
            label: "HTML",
            icon: "txt",
          },
          {
            label: "CSS",
            icon: "txt",
          },
          {
            label: "PHP",
            icon: "txt",
          },
          {
            label: "WordPress",
            icon: "txt",
          },
        ];
      case "/projects":
        return [
          {
            label: "Проекты",
            icon: "frame",
          },
          {
            label: "Мои работы",
            icon: "txt",
          },
          {
            label: "Carvet",
            icon: "frame",
          },
          {
            label: "img-1",
            icon: "img",
          },
          {
            label: "img-2",
            icon: "img",
          },
          {
            label: "Баскет74",
            icon: "frame",
          },
          {
            label: "img-3",
            icon: "img",
          },
          {
            label: "img-4",
            icon: "img",
          },
          {
            label: "Livingtree",
            icon: "frame",
          },
          {
            label: "img-5",
            icon: "img",
          },
          {
            label: "img-6",
            icon: "img",
          },
          {
            label: "Barger",
            icon: "frame",
          },
          {
            label: "img-7",
            icon: "img",
          },
          {
            label: "img-8",
            icon: "img",
          },
          {
            label: "LearnCode",
            icon: "frame",
          },
          {
            label: "img-9",
            icon: "img",
          },
        ];
      case "/contact":
        return [
          {
            label: "Frame",
            icon: "frame",
          },
          {
            label: "Связаться со мной",
            icon: "frame",
          },
          {
            label: "Услуги",
            icon: "txt",
          },
          {
            label: "Консультация",
            icon: "txt",
          },
          {
            label: "Верстка блока",
            icon: "txt",
          },
          {
            label: "Лендинг на Wordpress",
            icon: "txt",
          },
          {
            label: "Лендинг на Tilda",
            icon: "txt",
          },
          {
            label: "Натяжка Wordpress",
            icon: "txt",
          },
          {
            label: "Магазин Woocommerce",
            icon: "txt",
          },
          {
            label: "Перенос на хостинг",
            icon: "txt",
          },
          {
            label: "Установка SSL сертификата",
            icon: "txt",
          },
          {
            label: "Форма",
            icon: "frame",
          },
          {
            label: "Заказать консультацию",
            icon: "txt",
          },
          {
            label: "Телеграм",
            icon: "frame",
          },
          {
            label: "Вконтакте",
            icon: "frame",
          },
          {
            label: "Whatsap",
            icon: "frame",
          },
          {
            label: "Input-1",
            icon: "frame",
          },
          {
            label: "Input-2",
            icon: "frame",
          },
          {
            label: "Input-3",
            icon: "frame",
          },
          {
            label: "Консультация-1",
            icon: "txt",
          },
          {
            label: "Итого",
            icon: "txt",
          },
          {
            label: "Заказать",
            icon: "txt",
          },
        ];
      case "/thanks":
        return [
          { label: "Thanks", icon: "frame" },
          { label: "Спасбо за заказ", icon: "txt" },
        ];
      default:
        return ["Frame"];
    }
  };

  const headings = getHeadings();

  const handleClose = () => {
    if (window.innerWidth <= 768) {
      setVisible(false);
    } else {
      setVisible(!visible);
    }
  };

  return (
    <div className={clsx("panel panel-left", visible ? "open" : "close")}>
      <div className="panel__block panel__header ">
        <div className="logo">Tverdohleb.ru</div>
        <button className={clsx("btn-hide")} onClick={() => handleClose()}>
          <SvgIcon name="hide" />
        </button>
      </div>
      <div className="panel__block layers">
        <div className="panel__header">Layers</div>
        <ul className="layers">
          {headings.map((item, index) => (
            <li key={index} className="layers__item">
              <SvgIcon name={item.icon || "home"} w={16} h={16} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
