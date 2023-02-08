import "./rightside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMobileAndroid,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/pattern.png";

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
const mobile = <FontAwesomeIcon icon={faMobileAndroid} />;
const database = <FontAwesomeIcon icon={faDatabase} />;

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="big-arrow">
        <span className="big-arrow-icon">{arrowRight}</span>
      </div>
      <div className="contains-arrows">
        <div className="arrows"></div>
        <div className="followers">
          <p>
            70 K<br />
            Downloads
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="dots">
            <img className="image-pattern" src={img} alt="" />
          </div>
          <p className="take-expenses">
            Take your <br /> expenses <br /> under control
          </p>
        </div>
        <div className="grid-item">
          <span className="main-arrow-rotate">{arrowRight}</span>
        </div>
        <div className="grid-item">
          <div className="icon-container">
            <span className="style-line style-line-rotate"></span>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <span className="style-line style-line-rotate-up"></span>
        <div className="component-left">
          <div className="title-icon">
            <span className="icon">{database}</span>
            <p>Subscriptions</p>
          </div>
          <div className="title-text">
            {" "}
            <p className="sub-text">
              Make your money analysis faster and create your own way on saving
              on payments
            </p>
          </div>
        </div>
        <div className="component-right">
          <div className="title-icon">
            <span className="icon">{mobile}</span>
            <p>Mobile Applications</p>
          </div>
          <div className="title-text">
            {" "}
            <p className="sub-text">
              Shows income, expenses, and savings in a simple and easy to
              understand way
            </p>
          </div>
        </div>
        <div className="final-curve"></div>
      </div>
    </div>
  );
};

export default RightSide;
