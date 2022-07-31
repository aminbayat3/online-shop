import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { NavContext } from "../../context/nav-context";

import SelectBox from "../../components/select-box/select-box.component";

import Logo from "../../assets/bmFoods.png";
import "./navigation.styles.scss";

const Navigation = () => {
  const { setIsOptionHovered, isOptionHovered } = useContext(NavContext);

  const onMouseHandler = () => {
    setIsOptionHovered((prevIsOptionHovered) => !prevIsOptionHovered);
  };

  useEffect(() => {
    console.log("isOptionHovered is : ", isOptionHovered);
  }, [isOptionHovered]);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            <div className="nav-link-text">Home</div>
            <div className="line"></div>
          </Link>
          <div className="nav-link">
            <div
              className="nav-link-text light"
              onMouseEnter={onMouseHandler}
              onMouseLeave={onMouseHandler}
            >
              Products <div className="arrow">&#x1F893;</div>
            </div>
          </div>
          <Link className="nav-link" to="/aboutus">
            <div className="nav-link-text">About Us</div>
            <div className="line"></div>
          </Link>
          <Link className="nav-link" to="/contact">
            <div className="nav-link-text">Contact</div>
            <div className="line"></div>
          </Link>
          <Link className="nav-link" to="/auth">
            <div className="nav-link-text">Account</div>
            <div className="line"></div>
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <SelectBox />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
