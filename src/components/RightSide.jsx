import "./rightside.css";

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="contains-arrows">
        <div className="arrows"></div>
        <div className="followers">
            <p>70 K</p>
            <p>Downloads</p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="dots">...</div>
          <p>Take your expenses under control</p>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
};

export default RightSide;
