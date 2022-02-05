import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import Footer from "./../../Components/Footer/Footer";

function Login() {
  return (
    <>
      <div className="loginContainer">
        <div className="loginWrapper">
          <div className="loginLeft">
            <div className="socialLoginButtons">
              <div className="googleLogin">
                <GoogleIcon style={{ color: "#4285F4" }} />
                <span className="loginWithGoogle">Login with google</span>
              </div>
              <div className="facebookLogin">
                <FacebookIcon />
                <span className="loginWithFacebook">Login with facebook</span>
              </div>
            </div>
            <span className="or">OR</span>
            <div className="loginForm">
              <form action="" className="loginAlternative">
                <input
                  type="email"
                  className="loginInputItem"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  className="loginInputItem"
                  placeholder="Password"
                />
                <div className="loginExtras">
                  <div className="rememberMe">
                    <input type="checkbox" name="remember" value="Yes" />
                    <label htmlFor="remember"> Remember me</label>
                    <br />
                  </div>
                  <Link to="/reset" className="links">
                    <span className="forgotPassword">Forgot password ?</span>
                  </Link>
                </div>
                <div className="loginActionButtons">
                  <button className="loginNow">Login</button>
                  <Link to="/signup" className="links">
                    <button className="signUp">Sign up</button>
                  </Link>
                </div>
                <span className="bySigningUp">
                  By Logging in you agree to our{" "}
                  <Link to="/privacy" className="links">
                    <span className="termsAndConditions">
                      terms and conditions & privacy policy
                    </span>
                  </Link>
                </span>
              </form>
            </div>
          </div>
          <div className="loginRight">
            <img src="/assets/login.png" alt="" className="loginRightBcImg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
