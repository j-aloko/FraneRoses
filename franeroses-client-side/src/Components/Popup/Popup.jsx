import "./Popup.css";

function Popup({ showCat, showChocs }) {
  if (showCat) {
    return <div className="popupContainer">Cat</div>;
  } else if (showChocs) {
    return <div className="popupContainer">Chocs</div>;
  }
}

export default Popup;
