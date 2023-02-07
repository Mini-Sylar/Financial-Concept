import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import "./Reset.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="contains-sides">
          <LeftSide />
        </div>
      </div>
    </>
  );
};
export default App;
