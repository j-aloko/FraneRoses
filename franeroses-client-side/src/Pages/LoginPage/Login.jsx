import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import Footer from "./../../Components/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "./../../ApiCalls/Auth";
import { useContext, useState } from "react";
import { authContext } from "./../../Context-Api/Authentication/Context";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const { dispatch, error, isFetching } = useContext(authContext);
  const [PasswordVisibile, setPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      login(values, dispatch);
    },
    validationSchema,
  });

  //handle password visibility

  const handlePasswordVisibilty = () => {
    setPasswordVisible(!PasswordVisibile);
  };

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
              <form
                action=""
                className="loginAlternative"
                onSubmit={formik.handleSubmit}
              >
                <div className="loginInputs">
                  <input
                    type="email"
                    className="loginInputItem"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="loginError">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="loginInputs">
                  <div className="passwordVisibility">
                    <input
                      type={PasswordVisibile ? "text" : "password"}
                      className="loginInputItem"
                      placeholder="New password"
                      id="password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <div
                      className="visibilty"
                      onClick={handlePasswordVisibilty}
                    >
                      {PasswordVisibile ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="loginError">{formik.errors.password}</div>
                  ) : null}
                </div>
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
                  <button className="loginNow" type="submit">
                    {isFetching ? (
                      <CircularProgress
                        color="success"
                        style={{ backgroundColor: "transparent" }}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                  <Link to="/signup" className="links">
                    <button className="signUp">Sign up</button>
                  </Link>
                </div>
                {error && (
                  <span className="wrongLoginCredentials">
                    Wrong email or password
                  </span>
                )}
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
