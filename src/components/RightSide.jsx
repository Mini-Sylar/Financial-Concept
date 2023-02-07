import "./rightside.css";

const RightSide = () => {
  return (
    <div className="right-side">
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
          <div className="dots">...</div>
          <p className="take-expenses">
            Take your <br /> expenses <br /> under control
          </p>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="icon-container">
            <span className="style-line style-line-rotate"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
