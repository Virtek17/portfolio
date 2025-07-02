import { useEffect, useState } from "react";
import SvgIcon from "./SvgIcon";
import clsx from "clsx";

const LeftPanel = () => {
  const [visible, setVisible] = useState(true);

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
          <li className="layers__item ">
            <SvgIcon name="home" w={16} h={16} />
            Заголовок
          </li>
          <li className="layers__item ">
            <SvgIcon name="home" w={16} h={16} />
            Заголовок
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
