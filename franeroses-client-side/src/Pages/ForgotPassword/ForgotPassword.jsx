import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ForgotPassword() {
  const email = true;

  return (
    <div className="forgotPasswordMainContainer">
      <Link to="/" className="links">
        <span className="returnHome">Home</span>
      </Link>
      <div className="forgotPasswordSubContainer">
        <div className="forgotPasswordWrapper">
          <form action="" className="requestResetForm">
            <span className="requestResetTitle">REQUEST PASSWORD RESET</span>
            <input
              type="text"
              className="requestResetInput"
              placeholder="Enter your email address"
            />
            <button className="submitRequestPassword">Request</button>
            <span className="remberYourPasswordNow">
              Remember your password ?{" "}
              <Link to="/login" className="links">
                <span className="ResetLogin">Login</span>
              </Link>
            </span>
            {email ? (
              <div className="resetSuccessful">
                <CheckIcon />
                <span className="emailNotification">
                  Reset link has been sent to your email
                </span>
              </div>
            ) : (
              <div className="resetFailed">
                <ErrorOutlineIcon />
                <span className="emailNotification">Email does not exist</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
