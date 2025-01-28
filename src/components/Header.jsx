// import NavBarLinks from "./NavBarLinks";
// import Home from "../pages/Home";

import NavBar from "./NavBar";

function Header({ children }) {
  return (
    <header className="header">
      <NavBar />

      {children}
    </header>
  );
}

export default Header;
