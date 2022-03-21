import "./About.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <div className="aboutLeft">
          <h1 className="aboutLeftTitle">About</h1>
          <p className="aboutLeftDescription">
            Franeroses is a chocolate distribution enterprise with decades of
            experience in the chocolate industry. We trade in premium chocolate
            products such as milk chocolates and flavoured chocolate bars,
            drinking chocolate, chocolate dragee and semi-finished cocoa
            products such as the cocoa butter, cocoa powder, and cocoa cake.
          </p>
          <p className="aboutLeftDescription">
            We distribute our products to a dozen shopping malls and retail
            shops. We have a wide customer base across Ghana and around the
            world. Franeroses is your one stop supplier for all your premium
            cocoa products.
          </p>
        </div>
        <div className="aboutRight">
          <img src="/assets/aboutImg.png" alt="" className="aboutRightImage" />
        </div>
      </div>
    </div>
  );
}

export default About;
