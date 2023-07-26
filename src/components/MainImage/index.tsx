import React from "react";
import CoursesLogos from "../CoursesLogo";
import TechsLogos from "../TechsLogos";

function MainImage() {
  return (
    <section className="h-screen w-screen relative">
      <div className="pt-5 flex flex-col items-center h-full">
        <CoursesLogos />
        <TechsLogos />
      </div>
      <div className="h-min absolute left-4 bottom-12">
        <h1 className="z-2 text-white roboto-condensed text-xl lg:text-5xl">
          <i>Los mejores Cursos y Bootcamps para estudiar Desarrollo Web.</i>
        </h1>
      </div>
      <div className="-z-10 w-full h-full top-0 bottom-0 absolute">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </section>
  );
}

export default MainImage;
