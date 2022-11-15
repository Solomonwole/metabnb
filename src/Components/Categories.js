import { Link } from "react-router-dom";
import Setting from "../assets/setting.svg";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Categories = () => {
  const [click, setClick] = useState(false);

  const handleMenu = () => setClick(!click);

  return (
    <>
      <div className="categories">
        <div className="menu-icon" onClick={handleMenu}>
          {click ? (
            <CloseIcon className="toggle-menu close" />
          ) : (
            <MenuIcon className="toggle-menu" />
          )}
        </div>

        <div className="desktop--category--menu">
          <ul>
            <li>
              <Link to="/place">Resturant</Link>
            </li>
            <li>
              <Link to="/place">Cottage</Link>
            </li>
            <li>
              <Link to="/place">Castle</Link>
            </li>
            <li>
              <Link to="/place">Fantast city</Link>
            </li>
            <li>
              <Link to="/place">Beach</Link>
            </li>
            <li>
              <Link to="/place">Carbins</Link>
            </li>
            <li>
              <Link to="/place">Off-grid</Link>
            </li>
            <li>
              <Link to="/place" >Farm</Link>
            </li>
          </ul>
        </div>

       

        <Button variant="outlined" disableElevation>
          <span>Location</span> <img src={Setting} alt="Setting" />
        </Button>
      </div>
      <div className="mobile--category--menu" onClick={handleMenu}>
          {click ? (
            <div className="menu">
              <ul>
              <li>
                <Link to="/place" className="category--link">Resturant</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Cottage</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Castle</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Fantast city</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Beach</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Carbins</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Off-grid</Link>
              </li>
              <li>
                <Link to="/place" className="category--link">Farm</Link>
              </li>
            </ul>
            </div>
          ) : (
            ""
          )}
        </div>
    </>
  );
};

export default Categories;
