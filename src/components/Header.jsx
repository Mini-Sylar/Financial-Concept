const Header = () => {
  return (
    <header>
      <nav style={headerStyles.nav}>
        <div className="logo">Financilux</div>
        <div className="nav-links">
          <ul style={headerStyles.ul}>
            <li>
              <a href="">Platform</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">How it Works</a>
            </li>
          </ul>
        </div>
        <div className="call-to-action">
          <button type="button">Get The App</button>
          <button type="button">Ham</button>
        </div>
      </nav>
    </header>
  );
};
export default Header;

const headerStyles = {
  nav: {
    backgroundColor: "#fff",
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
};
