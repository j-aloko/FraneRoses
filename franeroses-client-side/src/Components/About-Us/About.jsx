import "./About.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <div className="aboutLeft">
          <h1 className="aboutLeftTitle">About</h1>
          <p className="aboutLeftDescription">
            Duis lacinia mauris ut sem suscipit cursus. Praesent tincidunt dolor
            eget pretium porttitor. Nam malesuada ipsum quis ligula porttitor
            placerat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Morbi maximus auctor commodo.
            Praesent rutrum purus ligula, fringilla dignissim eros pellentesque
            sit amet. Integer vel odio rhoncus, dapibus felis ut, venenatis
            arcu. Donec dapibus varius ligula et malesuada.
          </p>
          <p className="aboutLeftDescription">
            Duis lacinia mauris ut sem suscipit cursus. Praesent tincidunt dolor
            eget pretium porttitor. Nam malesuada ipsum quis ligula porttitor
            placerat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Morbi maximus auctor commodo.
            Praesent rutrum purus ligula, fringilla dignissim eros pellentesque
            sit amet. Integer vel odio rhoncus, dapibus felis ut, venenatis
            arcu. Donec dapibus varius ligula et malesuada.
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
