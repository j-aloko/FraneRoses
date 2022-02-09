import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useContext, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { userContext } from "./../../Context-Api/Users/Context";
import { getUsers, updateUser } from "./../../ApiCalls/Users";

function ResetPassword() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch, users, error } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers(dispatch); //get all users when this component renders
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      password: Yup.string().required("Please Enter your password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const client = users?.find((user) => user.email === values.email);
      const clientId = client._id;
      setTimeout(() => {
        updateUser(clientId, dispatch, values);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }, 2000);
    },
  });

  return (
    <div className="resetPasswordMainContainer">
      <div className="forgotResetSubContainer">
        <div className="forgotResetWrapper">
          <form action="" className="resetForm" onSubmit={formik.handleSubmit}>
            <span className="resetTitle">CREATE NEW PASSWORD</span>
            <span className="resetInstructions"></span>
            <input
              type="email"
              className="resetInput"
              placeholder="Enter your email address"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              className="resetInput"
              placeholder="New password"
              id="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <input
              type="password"
              className="resetInput"
              placeholder="Confirm new password"
              id="confirmPassword"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.Confirmpassword}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <button className="submitRequestReset" type="submit">
              {loading ? (
                <CircularProgress
                  color="secondary"
                  style={{ backgroundColor: "transparent" }}
                />
              ) : (
                "Reset password"
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
                <span className="emailNotification">Reset Successful</span>
              </div>
            )}
            {error && (
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
