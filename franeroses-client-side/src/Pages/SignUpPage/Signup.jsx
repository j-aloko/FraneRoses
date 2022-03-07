import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./../../Components/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Register } from "../../ApiCalls/Auth";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [confirmPasswordVisibile, setConfirmPasswordVisible] = useState(false);
  const [PasswordVisibile, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  //Form Validation & Sign Up

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Fullname required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().required("Password required"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      await Register(values);
      setLoading(false);
      navigate("/login");
    },
    validationSchema,
  });

  //handle password visibility

  const handlePasswordVisibilty = (type) => {
    if (type === "password") {
      setPasswordVisible(!PasswordVisibile);
    } else {
      setConfirmPasswordVisible(!confirmPasswordVisibile);
    }
  };

  return (
    <>
      <div className="signupContainer">
        <div className="signupWrapper">
          <div className="signupLeft">
            <h1 className="signUpTitle">Signup to Get Started</h1>
            <div className="signupForm">
              <form
                action=""
                className="signupAlternative"
                onSubmit={formik.handleSubmit}
              >
                <div className="signUpItemInputs">
                  <input
                    type="text"
                    className="signupInputItem"
                    placeholder="FullName"
                    id="fullname"
                    name="fullname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                  {formik.touched.fullname && formik.errors.fullname ? (
                    <div className="singupError">{formik.errors.fullname}</div>
                  ) : null}
                </div>
                <div className="signUpItemInputs">
                  <input
                    type="email"
                    className="signupInputItem"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="singupError">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="signUpItemInputs">
                  <div className="passwordVisibility">
                    <input
                      type={PasswordVisibile ? "text" : "password"}
                      className="signupInputItem"
                      placeholder="New password"
                      id="password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <div
                      className="visibilty"
                      onClick={() => handlePasswordVisibilty("password")}
                    >
                      {PasswordVisibile ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="singupError">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="signUpItemInputs">
                  <div className="passwordVisibility">
                    <input
                      type={confirmPasswordVisibile ? "text" : "password"}
                      className="signupInputItem"
                      placeholder="Confirm new password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.Confirmpassword}
                    />
                    <div
                      className="visibilty"
                      onClick={() => handlePasswordVisibilty("confirmPassword")}
                    >
                      {confirmPasswordVisibile ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="singupError">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div className="signupActionButtons">
                  <button className="signupNow" type="submit">
                    {loading ? (
                      <CircularProgress
                        color="success"
                        style={{ backgroundColor: "transparent" }}
                      />
                    ) : (
                      "Signup"
                    )}
                  </button>
                  <Link to="/login" className="links">
                    <button className="signupLogin">Login</button>
                  </Link>
                </div>
                <span className="bySigningUp">
                  By signing up you agree to our{" "}
                  <Link to="/privacy" className="links">
                    <span className="termsAndConditions">
                      terms and conditions & privacy policy
                    </span>
                  </Link>
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
