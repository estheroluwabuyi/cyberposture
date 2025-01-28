import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";
import ScheduleBtn from "./ScheduleBtn";

function NavBar() {
  return (
    <section className="nav-bar">
      <Logo />
      <NavBarLinks />
      <ScheduleBtn />
    </section>
  );
}

export default NavBar;
