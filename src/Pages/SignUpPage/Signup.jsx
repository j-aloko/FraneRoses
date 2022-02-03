import "./Signup.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Footer from "./../../Components/Footer/Footer";

function Signup() {
  return (
    <>
      <div className="signupContainer">
        <div className="signupWrapper">
          <div className="signupLeft">
            <div className="socialSignupButtons">
              <div className="googleSignup">
                <GoogleIcon style={{ color: "#4285F4" }} />
                <span className="signupWithGoogle">Sign up with google</span>
              </div>
              <div className="facebookSignup">
                <FacebookIcon />
                <span className="signupWithFacebook">
                  Sign up with facebook
                </span>
              </div>
            </div>
            <span className="signupOr">OR</span>
            <div className="signupForm">
              <form action="" className="signupAlternative">
                <input
                  type="text"
                  className="signupInputItem"
                  placeholder="Username"
                />
                <input
                  type="email"
                  className="signupInputItem"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  className="signupInputItem"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="signupInputItem"
                  placeholder="Confirm password"
                />
                <div className="signupActionButtons">
                  <button className="signupNow">Signup</button>
                  <Link to="/login" className="links">
                    <button className="signupLogin">Login</button>
                  </Link>
                </div>
                <span className="bySigningUp">
                  By signing up you agree to our{" "}
                  <span className="termsAndConditions">
                    terms and conditions & privacy policy
                  </span>
                </span>
              </form>
            </div>
          </div>
          <div className="signupRight">
            <img src="/assets/signup.png" alt="" className="signupRightBcImg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
