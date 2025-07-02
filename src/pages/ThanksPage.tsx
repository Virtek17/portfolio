import { useAppContext } from "../AppContext";
import "../index.css";

const Thanks = () => {
  const { clientName, textColorHEX, decorColorHEX } = useAppContext();

  return (
    <div className="thanks">
      <div className="thanks-text" style={{ color: textColorHEX }}>
        Спасибо за заказ{" "}
        <strong style={{ textShadow: `7px 3px 5px ${decorColorHEX}` }}>
          {clientName}
        </strong>
        , я свяжусь с вами в ближайшее время
      </div>
    </div>
  );
};

export default Thanks;
