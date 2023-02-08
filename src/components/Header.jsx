const Header = () => {
  return (
    <header style={headerStyles.mainHeader}>
      <nav style={headerStyles.nav}>
        {screen.width <= 500 ? "" : <div className="logo">Financilux</div>}
        <div className="nav-links">
          <ul style={headerStyles.ul}>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
          </ul>
        </div>
        <div className="call-to-action">
          {screen.width <= 500 ? (
            ""
          ) : (
            <button type="button">Get The App</button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;

const headerStyles = {
  nav: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    width: "300px",
  },
  mainHeader: {
    width: "min(100%, 1600px)",
    margin: "0 auto",
  },
};
