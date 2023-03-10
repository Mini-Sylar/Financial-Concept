import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./Reset.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="contains-sides">
          <div className="left-side-main">
            <LeftSide />
          </div>
          <div className="right-side-main">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
