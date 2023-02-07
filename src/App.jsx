import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide"
import "./Reset.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="contains-sides">
          <LeftSide />
          <RightSide></RightSide>
        </div>
      </div>
    </>
  );
};
export default App;
