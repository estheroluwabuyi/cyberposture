import { Link } from "react-router-dom";

function ScheduleBtn() {
  return (
    <button className="btn btn-primary">
      <Link to="/schedule" className="btn btn-primary">
        Schedule
      </Link>
    </button>
  );
}

export default ScheduleBtn;
