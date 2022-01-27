import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <h1 className="footerLeftCompanyName">FraneRoses Ventures</h1>
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
              <FacebookIcon style={{ fontSize: 35, color: "#3b5998" }} />
            </div>
            <div className="socialIcon">
              <InstagramIcon style={{ fontSize: 35, color: "#c32aa3" }} />
            </div>
            <div className="socialIcon">
              <TwitterIcon style={{ fontSize: 35, color: "#1da1f2" }} />
            </div>
          </div>
          <div className="footerItems">
            <span className="footerItem">Home</span>
            <span className="footerItem">Services</span>
            <span className="footerItem">Refund</span>
            <span className="footerItem">Terms</span>
            <span className="footerItem">Privacy Policy</span>
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
