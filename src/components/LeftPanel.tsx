import { useState } from "react";
import SvgIcon from "./SvgIcon";
import clsx from "clsx";

const LeftPanel = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx("left-panel", visible ? "open" : "close")}>
      <div className="left-panel__block left-panel__block--header row">
        <div className="logo">Site Name</div>
        <button className={clsx("btn-hide")} onClick={() => handleClose()}>
          <SvgIcon name="hide" />
        </button>
      </div>
      <div className="left-panel__block layers">
        <div className="left-panel__header">Layers</div>
        <ul className="layers-list">
          <li className="layers__item row row--left">
            <SvgIcon name="home" w={16} h={16} />
            Заголовок
          </li>
          <li className="layers__item row row--left">
            <SvgIcon name="home" w={16} h={16} />
            Заголовок
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
