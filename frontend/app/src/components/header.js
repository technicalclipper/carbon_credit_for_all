import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

function Header() {
  const { isAuthenticated, user, signup, login, logout } =
    useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar-component">
        <img src="images/home.png" />
        <p>Home</p>
      </div>
      <div className="navbar-component">
        <img src="images/tree.png" />
        <p>MyPlants</p>
      </div>
      <div className="navbar-component">
        <img src="images/trophy.png" />
        <p>Leaderboard</p>
      </div>
      <div className="navbar-component">
        <img src="images/sun.png" />
        <p>Marketplace</p>
      </div>

      {!isAuthenticated ? (
        <div className="navbar-component">
          <p>Login/Signup</p>
        </div>
      ) : (
        <div>
          <img src="images/person.png" />
          <p>Profile</p>
        </div>
      )}
    </div>
  );
}

export default Header;
