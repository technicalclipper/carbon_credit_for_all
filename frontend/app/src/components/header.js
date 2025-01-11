import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext, useState } from "react";

function Header() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover((prev) => !prev); // Toggle popover visibility
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    setShowPopover(false); // Hide the popover after logout
  };

  return (
    <div className="navbar">
      <div className="navbar-component">
        <img src="images/home.png" alt="Home" />
        <p>Home</p>
      </div>
      <div className="navbar-component">
        <img src="images/tree.png" alt="My Plants" />
        <p>MyPlants</p>
      </div>
      <div className="navbar-component">
        <img src="images/trophy.png" alt="Leaderboard" />
        <p>Leaderboard</p>
      </div>
      <div className="navbar-component">
        <img src="images/sun.png" alt="Marketplace" />
        <p>Marketplace</p>
      </div>

      {!isAuthenticated ? (
        <Link to="/login">
          <div className="navbar-component">
            <p>Login/Signup</p>
          </div>
        </Link>
      ) : (
        <div className="navbar-component profile-container">
          <img
            src="images/person.png"
            alt="Profile"
            onClick={togglePopover}
            style={{ cursor: "pointer" }}
          />
          <p onClick={togglePopover} style={{ cursor: "pointer" }}>
            Profile
          </p>
          {showPopover && (
            <div className="popover">
              <button className="popbutton" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
