import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userName = "Test User"; 

  useEffect(() => {
    // Check if the user is logged in based on the current path
    if (location.pathname !== "/login" && location.pathname !== "/") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </li>
        {!isLoggedIn && location.pathname !== "/" && (
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <>
            <li className="navbar-item">
              <span className="navbar-greeting">Hello, {userName}!</span>
            </li>
            <li className="navbar-item">
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/challenges" className="navbar-link">
                Challenges
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/rewards" className="navbar-link">
                Rewards
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
            </li>
            <li className="navbar-item">
              <button
                onClick={handleSignOut}
                className="navbar-link signout-button"
              >
                Sign Out
              </button>
            </li>
          </>
        )}
        {!isLoggedIn && location.pathname === "/" && (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Log In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
