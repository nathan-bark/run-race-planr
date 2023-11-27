import logo from "../../../assets/run-planr-high-resolution-logo-transparent.svg";

import "./Header.styles.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* logo */}
        <div className="logo-container">
          <img src={logo} alt="logo" height="100px" width="250px" />
        </div>

        {/* nav links */}
        <nav>
          <ul className="nav-links-list">
            <li className="nav-link">Create Plan</li>
            <li className="nav-link">Learn More</li>
            <li className="nav-link">Log In/ Register</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
