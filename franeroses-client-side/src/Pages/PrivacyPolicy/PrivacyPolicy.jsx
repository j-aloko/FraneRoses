import "./PrivacyPolicy.css";
import React, { useContext, useEffect } from "react";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderPrivacyPage } from "../../Context-Api/Pages/Actions";
import Footer from "./../../Components/Footer/Footer";

function PrivacyPolicy() {
  const { dispatch } = useContext(PagesContext);

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the Privacy Policy Page
  useEffect(() => {
    dispatch(renderPrivacyPage());
  }, [dispatch]);

  return (
    <>
      <div className="privacyPolicyContainer">
        <div className="privacyPolicyWrapper">
          <h1 className="privacyPolicyTitle">Privacy Policy</h1>
          <p className="privacyPolicy">
            We have the utmost respect for your privacy. Your information will
            never be shared or sold with any third-parties and will solely be
            used to fulfill your order. Your personal information is
            confidential. We do not sell, trade, or rent user's personal
            identification information to others. Your name, address, payment
            information and email address is only used for transactions,
            shipping, and the communication of your order. If users decide to
            subscribe or opt-in to our mailing list, we may occasionally send a
            newsletter a few times a year to announce new products, sales or
            events of interest to customers, but customers can opt out at any
            point at the bottom of our newsletters. We may disclose your
            personal information if we are required by law to do so or if you
            violate our Terms of Service.
          </p>
          <h1 className="gcpaAct">Ghanaian Consumer Privacy Act</h1>
          <h3 className="yourRight">
            Your Right Under The Ghanaian Consumer Privacy Act{" "}
          </h3>
          <p className="act">
            The Ghanaian Consumer Privacy Act (GCPA) provides you with rights
            regarding how your data or personal information is treated. Under
            the legislation, Ghanaian residents can choose to opt out of the
            “sale” of their personal information to third parties. Based on the
            GCPA definition, “sale” refers to data collection for the purpose of
            creating advertising and other communications.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
