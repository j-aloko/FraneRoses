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

function Footer() {
  const { privacy, terms, delivery } = useContext(PagesContext);

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerLeftItem">
            <RoomIcon />
            <span className="footerLeftbusinessItem">
              Tema Community 25, Ghana
            </span>
          </div>
          <div className="footerLeftItem">
            <LocalPhoneIcon />
            <span className="footerLeftbusinessItem">(000)00-000-0000</span>
          </div>
          <div className="footerLeftItem">
            <EmailIcon />
            <span className="footerLeftbusinessItem">example@gmail.com</span>
          </div>
        </div>
        <div className="footerRight">
          <div className="socialMediaHandles">
            <div className="socialIcon">
              <FacebookIcon style={{ color: "#3b5998" }} />
            </div>
            <div className="socialIcon">
              <InstagramIcon style={{ color: "#c32aa3" }} />
            </div>
            <div className="socialIcon">
              <TwitterIcon style={{ color: "#1da1f2" }} />
            </div>
          </div>
          <div className="footerItems">
            <Link to="/deliveries" className="links">
              <span className={delivery ? "footerItem active" : "footerItem"}>
                Deliveries & Refund
              </span>
            </Link>
            <Link to="/privacy" className="links">
              <span className={privacy ? "footerItem active" : "footerItem"}>
                Privacy policy
              </span>
            </Link>
            <Link to="/terms" className="links">
              <span className={terms ? "footerItem active" : "footerItem"}>
                Terms of service
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
            <CopyrightIcon />
            <span className="FooterYear">2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
