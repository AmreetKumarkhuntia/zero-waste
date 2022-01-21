import "./css/header.css";
import Login from "../login page/login";
import Signup from "../SignUp page/signup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logo_url =
    "https://res.cloudinary.com/dke9xzbl6/image/upload/v1641579474/ze-te/logo_dqkkwc.png";

  const [loginpageloaded, setLoginpageloaded] = useState(false);
  const [signuppageloaded, setSignuppageloaded] = useState(false);

  function login() {
    setLoginpageloaded(true);
  }

  function signup() {
    setSignuppageloaded(true);
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo_url} alt="loading_image"></img>
        </div>
        <div className="list">
          <h2>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/inspiration">
              <li>Inspiration</li>
              </Link>
              <Link to="/ngo">
              <li>Ngos</li>
              </Link>
              <Link to="/book">
              <li>Book Now</li>
              </Link>
              <Link to="/pickup">
              <li>Pick up Now</li>
              </Link>
            </ul>
          </h2>
        </div>
        <div className="sign">
          <button className="login" onClick={() => login()}>
            <h3>Login</h3>
          </button>
          <button className="signup" onClick={() => signup()}>
            <h3>Sign Up</h3>
          </button>
        </div>
      </div>
      {loginpageloaded && <Login setLoginpageloaded={setLoginpageloaded} />}
      {signuppageloaded && <Signup setSignuppageloaded={setSignuppageloaded} />}
    </>
  );
};

export default Header;
