import ava from "../assets/avatar.jpg";

const RightPanel = () => {
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
          <li className="layers__item">
            w = 1799px
          </li>
          <li className="layers__item">
            h = 800px
          </li>
        </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Текст</div>
        <ul className="layers">
          <li className="layers__item">
            Шрифт
          </li>
          <li className="layers__item">
            Размер
          </li>
          <li className="layers__item">
            Цвет
          </li>
          </ul>
      </div>
      <div className="panel__block">
        <div className="panel__header">Фон</div>
        <ul className="layers">
          <li className="layers__item">Выбрать цвет</li>
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
