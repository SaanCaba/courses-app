import { coursesIcons } from "./images";
import "./index.css";

function CoursesLogos() {
  return (
    <div className="flex gap-10 items-center">
      {coursesIcons.map((icon) => {
        return (
          <div className="course-logo-container">
            <img className="course-logo" src={icon} />
          </div>
        );
      })}
    </div>
  );
}

export default CoursesLogos;
