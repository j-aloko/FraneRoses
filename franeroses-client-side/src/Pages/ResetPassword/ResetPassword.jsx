import "./ResetPassword.css";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ResetPassword() {
  const email = false;

  return (
    <div className="resetPasswordMainContainer">
      <div className="forgotResetSubContainer">
        <div className="forgotResetWrapper">
          <form action="" className="resetForm">
            <span className="resetTitle">CREATE NEW PASSWORD</span>
            <span className="resetInstructions"></span>
            <input
              type="password"
              className="resetInput"
              placeholder="New password"
            />
            <input
              type="password"
              className="resetInput"
              placeholder="Confirm new password"
            />
            <button className="submitRequestReset">Reset password</button>
            <span className="remberYourPasswordNow">
              Remember your password ?{" "}
              <Link to="/login" className="links">
                <span className="ResetLogin">Login</span>
              </Link>
            </span>
            {email ? (
              <div className="resetSuccessful">
                <CheckIcon />
                <span className="emailNotification">Reset Successful</span>
              </div>
            ) : (
              <div className="resetFailed">
                <ErrorOutlineIcon />
                <span className="emailNotification">Reset Failed</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
