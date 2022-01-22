import { Facebook, Instagram, Mail } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="logosection">
            <img
              src="https://res.cloudinary.com/dke9xzbl6/image/upload/v1641579474/ze-te/logo_dqkkwc.png"
              alt=""
              className="footer_logo"
            />
          </div>
          <div className="textsection">
            <div className="text">
              <Link className="link" to="/">
                <div className="subheading">Home</div>
              </Link>
              <Link className="link" to="/inspiration">
                <div className="subheading">Inspiration</div>
              </Link>
              <Link className="link" to="/ngo">
                <div className="subheading">Ngos</div>
              </Link>
              <Link className="link" to="/book">
                <div className="subheading">Book Now</div>
              </Link>
              <Link className="link" to="/pickup">
                <div className="subheading">Pick Up now</div>
              </Link>
            </div>
          </div>

          <div className="bottom_section">
            <div className="right_section">
              <h5>© 2022 ZE-TE. All rights reserved.</h5>
            </div>
            <div className="left_section">
              <div className="social_media">
                <Facebook style={{ fontSize: 30, paddingRight: 20 }} />
                <Instagram style={{ fontSize: 30, paddingRight: 20 }} />
                <Mail style={{ fontSize: 30, paddingRight: 20 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
