import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="container flex flex-row justify-between">
          <div className="nav-left-part">
            <h2 className="nav-title">Where in the world?</h2>
          </div>
          <div className="nav-right-part">
            <MdDarkMode />
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
