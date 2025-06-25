import { Outlet } from "react-router-dom";
import Tab from "./components/tab";
import "./index.css";

const App = () => {
  return (
    <div className="main">
      <Tab />
      <main>
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </main>
    </div>
  );
};

export default App;
