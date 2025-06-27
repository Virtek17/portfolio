import ava from "../assets/avatar.jpg";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="avatar">
        <img className="avatar-img" src={ava} alt="ava" />
      </div>
      <div className="left-panel__block layers">
        <div className="left-panel__header">Размеры</div>
        <ul className="layers-list">
          <li className="layers__item row ">1</li>
          <li className="layers__item row ">2</li>
        </ul>
      </div>
      <div className="left-panel__block layers">
        <div className="left-panel__header">Шрифты</div>
        <ul className="layers-list">
          <li className="layers__item row ">1</li>
          <li className="layers__item row ">2</li>
        </ul>
      </div>
      <div className="left-panel__block layers">
        <div className="left-panel__header">Цвета</div>
        <ul className="layers-list">
          <li className="layers__item row ">1</li>
          <li className="layers__item row ">2</li>
        </ul>
      </div>
      <div className="left-panel__block layers">
        <div className="left-panel__header">Соцсети</div>
        <ul className="layers-list">
          <li className="layers__item row ">1</li>
          <li className="layers__item row ">2</li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
