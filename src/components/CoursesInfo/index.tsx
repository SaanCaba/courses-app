import React from "react";
import { coursesInfo } from "./coursesInfo";
import Course from "./Course";

function CoursesInfo() {
  return (
    <section className="bg-black bg-opacity-50">
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {coursesInfo.map((course) => {
          return <Course courseInfo={course} />;
        })}
      </div>
    </section>
  );
}

export default CoursesInfo;
