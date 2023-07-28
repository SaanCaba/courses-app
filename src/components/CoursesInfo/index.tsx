import React from "react";
import { coursesInfo } from "./coursesInfo";
import Course from "./Course";

function CoursesInfo() {
  return (
    <section className="bg-black flex flex-wrap gap-10 justify-center p-5 h-min bg-opacity-50">
      {coursesInfo.map((course) => {
        return <Course courseInfo={course} />;
      })}
    </section>
  );
}

export default CoursesInfo;
