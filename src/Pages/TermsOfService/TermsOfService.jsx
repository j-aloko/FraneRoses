import "./TermsOfService.css";
import React, { useContext, useEffect } from "react";
import Footer from "./../../Components/Footer/Footer";
import Navbar from "./../../Components/Navbar/Navbar";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderTermsPage } from "./../../Context-Api/Pages/Actions";

function TermsOfService() {
  const { dispatch } = useContext(PagesContext);
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the Terms of service  Page
  useEffect(() => {
    dispatch(renderTermsPage());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="termsOfServiceContainer">
        <div className="termsOfServiceWrapper">
          <h1 className="termsofServiceTitle">Terms of Service</h1>
          <p className="termsofService">
            Prices for our products are subject to change without notice. We
            reserve the right at any time to modify or discontinue the Service
            (or any part or content thereof) without notice at any time. We have
            made every effort to display as accurately as possible the colors
            and images of our products that appear at the store. We cannot
            guarantee that your computer monitor's display of any color will be
            accurate.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfService;
