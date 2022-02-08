import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  init(process.env.REACT_APP_USER_ID);

  const formik = useFormik({
    initialValues: {
      from_email: "jaloko@st.ug.edu.gh",
      from_name: "FraneRoses Ventures",
      subject: "PASSWORD RESET",
      to_email: "",
      reply_to: "jaloko@st.ug.edu.gh",
      message:
        "follow this link to reset your password http://localhost:3000/5121d2r55956cfe2842ffa0s144cecd7dtea0658c5e6bf77479fd64025b5956cfe2842ffa0s144cecd7dtea0658c5e777a95956cfe2842ffa0s144cecd7dtea0658c5e5956cfe2842ffa0s144cecd7dtea0658c5e",
    },
    validationSchema: Yup.object({
      to_email: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_USER_ID
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setSuccess(true);
            setLoading(false);
          },
          function (error) {
            console.log("FAILED...", error);
            setError(true);
            setLoading(false);
          }
        );
    },
  });

  return (
    <div className="forgotPasswordMainContainer">
      <Link to="/" className="links">
        <span className="returnHome">Home</span>
      </Link>
      <div className="forgotPasswordSubContainer">
        <div className="forgotPasswordWrapper">
          <form
            action=""
            className="requestResetForm"
            onSubmit={formik.handleSubmit}
          >
            <span className="requestResetTitle">REQUEST PASSWORD RESET</span>
            <input
              type="email"
              className="requestResetInput"
              placeholder="Enter your email address"
              id="to_email"
              name="to_email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.to_email}
            />
            {formik.touched.to_email && formik.errors.to_email ? (
              <div className="resetFormValidation">
                {formik.errors.to_email}
              </div>
            ) : null}
            <button className="submitRequestPassword" type="submit">
              {loading ? (
                <CircularProgress
                  color="secondary"
                  style={{ backgroundColor: "transparent" }}
                />
              ) : (
                "Request"
              )}
            </button>
            <span className="remberYourPasswordNow">
              Remember your password ?{" "}
              <Link to="/login" className="links">
                <span className="ResetLogin">Login</span>
              </Link>
            </span>
            {success && (
              <div className="resetSuccessful">
                <CheckIcon />
                <span className="emailNotification">
                  Reset link has been sent to your email
                </span>
              </div>
            )}
            {error && (
              <div className="resetFailed">
                <ErrorOutlineIcon />
                <span className="emailNotification">Something went wrong</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
