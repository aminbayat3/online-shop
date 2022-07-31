import { useContext } from "react";
import { Link } from "react-router-dom";

import { NavContext } from "../../context/nav-context";

import "./select-box.styles.scss";

const OPTIONS = [
  {
    name: "Coffee",
    link: "coffee",
  },
  {
    name: "Spices",
    link: "spices",
  },
  {
    name: "Beans & Grains",
    link: "beans",
  },
  {
    name: "Tea",
    link: "tea",
  },
  {
    name: "Dried Fruits & Nuts",
    link: "nuts",
  },
];

const SelectBox = () => {
  const { setIsOptionHovered, isOptionHovered } = useContext(NavContext);

  const onMouseHandler = () => {
    if(isOptionHovered) {
      setIsOptionHovered((prevIsOptionHovered) => !prevIsOptionHovered);
    }
    
  };

  return (
    <div
      className={`select-box-container`}
      onMouseEnter={onMouseHandler}
      onMouseLeave={onMouseHandler}
    >
      {OPTIONS.map(({ name, link }) => {
        return (
          <Link
            key={name}
            className={`option ${isOptionHovered ? "visible" : ""} `}
            to={link}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default SelectBox;
