import { Link } from "react-router-dom";

function NavBarLinks() {
  return (
    <ul>
      <li>
        <Link to="/service">Service</Link>
      </li>

      <li>
        <Link to="/about">About us</Link>
      </li>

      <li>
        <Link to="/contact">Contact us</Link>
      </li>
    </ul>
  );
}

export default NavBarLinks;
