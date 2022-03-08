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

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerLeftItem">
            {ismaxWidth500 ? (
              <RoomIcon style={{ fontSize: 20 }} />
            ) : (
              <RoomIcon />
            )}
            <span className="footerLeftbusinessItem">
              Tema Community 25, Ghana
            </span>
          </div>
          <div className="footerLeftItem">
            {ismaxWidth500 ? (
              <LocalPhoneIcon style={{ fontSize: 20 }} />
            ) : (
              <LocalPhoneIcon />
            )}
            <span className="footerLeftbusinessItem">(000)00-000-0000</span>
          </div>
          <div className="footerLeftItem">
            {ismaxWidth500 ? (
              <EmailIcon style={{ fontSize: 20 }} />
            ) : (
              <EmailIcon />
            )}
            <span className="footerLeftbusinessItem">example@gmail.com</span>
          </div>
        </div>
        <div className="footerRight">
          <div className="socialMediaHandles">
            <div className="socialIcon">
              {ismaxWidth500 ? (
                <FacebookIcon style={{ color: "#3b5998", fontSize: 20 }} />
              ) : (
                <FacebookIcon style={{ color: "#3b5998" }} />
              )}
            </div>
            <div className="socialIcon">
              {ismaxWidth500 ? (
                <InstagramIcon style={{ fontSize: 20, color: "#c32aa3" }} />
              ) : (
                <InstagramIcon style={{ color: "#c32aa3" }} />
              )}
            </div>
            <div className="socialIcon">
              {ismaxWidth500 ? (
                <TwitterIcon style={{ fontSize: 20, color: "#1da1f2" }} />
              ) : (
                <TwitterIcon style={{ color: "#1da1f2" }} />
              )}
            </div>
          </div>
          <div className="footerItems">
            <Link to="/deliveries" className="links">
              <span className={delivery ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "Refund" : "Deliveries & Refund"}
              </span>
            </Link>
            <Link to="/privacy" className="links">
              <span className={privacy ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "Privacy" : "Privacy policy"}
              </span>
            </Link>
            <Link to="/terms" className="links">
              <span className={terms ? "footerItem active" : "footerItem"}>
                {ismaxWidth500 ? "service" : "Terms of service"}
              </span>
            </Link>
          </div>
          <div className="footerPaymentGateways">
            <img src="/assets/mtn.png" alt="" className="gatewayItem" />
            <img src="/assets/vodafone.png" alt="" className="gatewayItem" />
            <img src="/assets/visa.png" alt="" className="gatewayItem" />
            <img src="/assets/mastercard.png" alt="" className="gatewayItem" />
          </div>
          <div className="footerCopyRight">
            <span className="footerCompanyName">FraneRoses Ventures</span>
            {ismaxWidth500 ? (
              <CopyrightIcon style={{ fontSize: 20 }} />
            ) : (
              <CopyrightIcon />
            )}
            <span className="FooterYear">2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
