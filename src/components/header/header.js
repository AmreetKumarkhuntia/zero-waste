import "./css/header.css";
import Login from "../login page/login";
import Signup from "../SignUp page/signup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logo_url ="https://res.cloudinary.com/dke9xzbl6/image/upload/v1641579474/ze-te/logo_dqkkwc.png";
  const hamburger='https://res.cloudinary.com/dke9xzbl6/image/upload/v1642795502/ze-te/Hamburger_icon_jeqz9y.png';

  const [loginpageloaded, setLoginpageloaded] = useState(false);
  const [signuppageloaded, setSignuppageloaded] = useState(false);

  function login() {
    setLoginpageloaded(true);
  }

  function signup() {
    setSignuppageloaded(true);
  }

  const style1 = {
    display: " block",
  }

  const style2 = {
    display: "none",
  }

  const [display, setDisplay] = useState(style2);
  const [toggle,setToggle]=useState(false);

  function hamburger_toggle() {
    if (!toggle) {
      setDisplay(style2);
      setToggle(true);
    }
    else {
      setDisplay(style1);
      setToggle(false);
    }
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
        <div className="responsive">
          <div style={display} className="list">
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
          <div style={display}>
            <div style={{ display: "flex" }} className="sign">
              <button className="login" onClick={() => login()}>
                <h3>Login</h3>
              </button>
              <button className="signup" onClick={() => signup()}>
                <h3>Sign Up</h3>
              </button>
            </div>
          </div >
        </div>
        <button className='hamburger' onClick={() => {
          hamburger_toggle();
        }}><img src={hamburger} alt='error'></img></button>
      </div>
      {loginpageloaded && <Login setLoginpageloaded={setLoginpageloaded} />}
      {signuppageloaded && <Signup setSignuppageloaded={setSignuppageloaded} />}
    </>
  );
};

export default Header;
