import { useAppContext } from "../AppContext";
import Slider from "../components/Slider";

const ProjectsPage = () => {
  const { textColorHEX, decorColorHEX } = useAppContext();

  return (
    <div className="page page__projects">
      <h1
        className="text-block__title projects-title"
        style={{
          color: textColorHEX,
          textShadow: `7px 3px 5px ${decorColorHEX}`,
        }}
      >
        Мои работы
      </h1>
      <Slider />
    </div>
  );
};

export default ProjectsPage;
