import clsx from "clsx";
import SvgIcon from "./SvgIcon";
import { useState } from "react";
import { NavLink } from "react-router";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: "home", path: "/" },
    { id: "skills", icon: "skills", path: "/skills" },
    { id: "projects", icon: "projects", path: "/projects" },
    { id: "form", icon: "form", path: "/contact" },
  ];

  const handleClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab">
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.id}
          className={clsx("tab-item", {
            "tab-item--active": activeTab === tab.id,
          })}
          onClick={() => {
            handleClick(tab.id);
          }}
        >
          <SvgIcon name={tab.icon} />
        </NavLink>
      ))}
    </div>
  );
};

export default Tab;
