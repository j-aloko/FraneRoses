import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const { privacy, terms, delivery } = useContext(PagesContext);

  const ismaxWidth500 = useMediaQuery({ query: "(max-width: 500px)" });

  //get full year

  const d = new Date(Date.now());
  let year = d.getFullYear();

  return (
    <footer className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <nav className="footerLeftItem">
            {ismaxWidth500 ? (
              <RoomIcon style={{ fontSize: 15 }} />
            ) : (
              <RoomIcon />
            )}
            <span className="footerLeftbusinessItem">
              New Dawhenya, Accra, Ghana
            </span>
          </nav>
          <nav className="footerLeftItem">
            {ismaxWidth500 ? (
              <LocalPhoneIcon style={{ fontSize: 15 }} />
            ) : (
              <LocalPhoneIcon />
            )}
            <a href="tel:+233244632389" className="link">
              <span className="footerLeftbusinessItem">(+233)24 463 2389</span>
            </a>
          </nav>
          <nav className="footerLeftItem">
            {ismaxWidth500 ? (
              <EmailIcon style={{ fontSize: 15 }} />
            ) : (
              <EmailIcon />
            )}
            <a href="mailto:franerosesventures@gmail.com" className="link">
              <span className="footerLeftbusinessItem">
                franerosesventures@gmail.com
              </span>
            </a>
          </nav>
        </div>
        <div className="footerRight">
          <div className="socialMediaHandles">
            <nav className="socialIcon">
              {ismaxWidth500 ? (
                <FacebookIcon style={{ color: "#3b5998", fontSize: 15 }} />
              ) : (
                <FacebookIcon style={{ color: "#3b5998" }} />
              )}
            </nav>
            <nav className="socialIcon">
              {ismaxWidth500 ? (
                <InstagramIcon style={{ fontSize: 15, color: "#c32aa3" }} />
              ) : (
                <InstagramIcon style={{ color: "#c32aa3" }} />
              )}
            </nav>
            <nav className="socialIcon">
              {ismaxWidth500 ? (
                <TwitterIcon style={{ fontSize: 15, color: "#1da1f2" }} />
              ) : (
                <TwitterIcon style={{ color: "#1da1f2" }} />
              )}
            </nav>
          </div>
          <div className="footerItems">
            <Link to="/deliveries" className="links">
              <nav className={delivery ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "Refund" : "Deliveries & Refund"}
              </nav>
            </Link>
            <Link to="/privacy" className="links">
              <nav className={privacy ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "Privacy" : "Privacy policy"}
              </nav>
            </Link>
            <Link to="/terms" className="links">
              <nav className={terms ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "service" : "Terms of service"}
              </nav>
            </Link>
          </div>
          <div className="footerPaymentGateways">
            <img src="/assets/mtn.png" alt="" className="gatewayItem" />
            <img src="/assets/vodafone.png" alt="" className="gatewayItem" />
            <img src="/assets/tigo.png" alt="" className="gatewayItem" />
            <img src="/assets/visa.png" alt="" className="gatewayItem" />
            <img src="/assets/mastercard.png" alt="" className="gatewayItem" />
          </div>
          <div className="footerCopyRight">
            <span className="footerCompanyName">Franeroses</span>
            {ismaxWidth500 ? (
              <CopyrightIcon style={{ fontSize: 20 }} />
            ) : (
              <CopyrightIcon />
            )}
            <span className="FooterYear">{year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
