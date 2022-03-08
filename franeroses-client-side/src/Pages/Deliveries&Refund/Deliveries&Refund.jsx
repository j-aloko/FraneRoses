import "./Deliveries&Refund.css";
import React, { useContext, useEffect } from "react";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderDeliveryPage } from "./../../Context-Api/Pages/Actions";
import Footer from "./../../Components/Footer/Footer";

function DeliveriesRefund() {
  const { dispatch } = useContext(PagesContext);

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the Delivery&Refund  Page
  useEffect(() => {
    dispatch(renderDeliveryPage());
  }, [dispatch]);

  return (
    <>
      <div className="deliveries-Refund-Container">
        <div className="deliveries-Refund-wrapper">
          <h1 className="deliveriesTitle">Deliveries & Refund</h1>
          <h3 className="internationalDeliveries">International Deliveries</h3>
          <p className="internationalTerms">
            We ship our products internationally via DHL Express, which takes 3
            to 5 business days. Payments can be made through Visa or master
            credit card.
          </p>
          <h3 className="localDeliveries">Local Deliveries</h3>
          <p className="localterms">
            We deliver anywhere within Accra, Ghana for a fee.{" "}
          </p>
          <h3 className="returnAndExchages">Returns & Exchanges</h3>
          <p className="exchageTerms">
            We do not accept returns of any chocolate bar. If you are unhappy
            with your order, please contact us at franerosesventures.com. Please
            include your full name, phone number, a photo of your chocolate, and
            order number. If your order arrives damaged, please include a photo
            of the damages. We will review each claim and either issue a refund
            or resend the product.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeliveriesRefund;
