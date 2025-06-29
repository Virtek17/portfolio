
import { useEffect, useState } from "react";
import photo from "../assets/photo.png"
import clsx from "clsx";

const HomePage = () => {
  
  const [open, setOpen] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    },2000 )
  },[])


  return (
    <div className="page">
      <div className="page__photo">
        <img src={photo} alt="photo" className={clsx("photo", open ? "photoOpen" : "")}/>
      </div>
      
      <div className="text-block">
        <p>Илья 22 года</p>
        <p>Веб разработчик</p>
        <p>Стаж 3 года</p>
      </div>
    </div>
  );
};

export default HomePage;
