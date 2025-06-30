import ava from "../assets/avatar.jpg";
import { ColorPicker } from "primereact/colorpicker";
import { useAppContext } from "../AppContext";

const RightPanel = () => {
  const { colorHEX, setColorHEX } = useAppContext();
  const { textColorHEX, setTextColorHEX } = useAppContext();
  const { decorColorHEX, setDecorColorHEX } = useAppContext();

  return (
    <div className="panel">
      <div className="panel__block panel__header">
        <div className="avatar">
          <img className="avatar-img" src={ava} alt="ava" />
        </div>
      </div>
      <div className="panel__block">
        <div className="panel__header">Размеры</div>
        <ul className="layers">
          <li className="layers__item">w = 1799px</li>
          <li className="layers__item">h = 800px</li>
        </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Текст</div>
        <ul className="layers">
          <li className="layers__item">Шрифт</li>
          <li className="layers__item">Размер</li>
          <li className="layers__item">
            <div>Цвет</div>
            <div>
              <ColorPicker
                style={{ width: "20px" }}
                format="hex"
                value={textColorHEX}
                onChange={(e) => setTextColorHEX("#" + e.value)}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Фон</div>
        <ul className="layers">
          <li className="layers__item">Выбрать цвет</li>
          <li className="layers__item">{colorHEX}</li>
          <ColorPicker
            format="hex"
            value={colorHEX}
            onChange={(e) => setColorHEX("#" + e.value)}
          />
        </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Декорации</div>
        <ul className="layers">
          <li className="layers__item">Выбрать цвет</li>
          <li className="layers__item">{decorColorHEX}</li>
          <ColorPicker
            format="hex"
            value={decorColorHEX}
            onChange={(e) => setDecorColorHEX("#" + e.value)}
          />
        </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Соцсети</div>
        <ul className="layers">
          <li className="layers__item">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
