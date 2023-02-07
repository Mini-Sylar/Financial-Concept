import "./leftside.css";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="icon-container">
        <span className="style-line"></span>
        <span className="arrow">➡</span>
        <span className="ExploreText">
          Explore a 14 day <strong>free trial</strong>
        </span>
      </div>
      <div className="hero-text">
        <h1 className="heading-text">
          <span>Financial</span>
          <br />
          Tracking
          <br />
          Platform
        </h1>
      </div>
      <div className="call-to-action">
        <button type="button" className="try-for-free">Try for free</button>
        <button type="button" className="see-demo">See demo</button>
      </div>
      <div className="cards">
        <div className="card-one">
          <h3>1 Million +</h3>
          <p>Every month cashback for our clients</p>
        </div>
        <div className="card-two">
          <div className="left-inner">
            <span>spin</span>
            <span>...</span>
          </div>
          <div className="right-inner">
            <span>Zig zag</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
