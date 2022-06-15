import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    navigate("/");
  };
  // console.log(user.photos[0].value);
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Social Authentication App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              // src=""
              alt="https://picsum.photos/200/300"
              className="avatar"
            ></img>
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
