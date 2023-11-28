import { Outlet } from "react-router";
import logo from "../../../assets/run-planr-high-resolution-logo-transparent.svg";

import "./Header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="header-container">
          {/* logo links to home page*/}
          <div className="logo-container">
            <Link to='/'>
            <img src={logo} alt="logo" height="100px" width="250px" />
            </Link>
            
          </div>

          {/* nav links */}
          <nav>
            <ul className="nav-links-list">
              <li><Link className="nav-link" to='create-plan' >Create Plan</Link></li>
              <li><Link className="nav-link" to='learn-more' >Learn More</Link></li>
              <li><Link className="nav-link" to='sign-in' >Sign In</Link></li>
              
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
