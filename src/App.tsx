import { Outlet } from "react-router-dom";
import "./index.css";
import Tab from "./components/Tab";
import Frame from "./components/Frame";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Main from "./components/Main";

const App = () => {
  return (
    <Main>
      <LeftPanel />
      <Frame frameName="Главная">
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </Frame>
      <RightPanel />
      <Tab />
    </Main>
  );
};

export default App;
