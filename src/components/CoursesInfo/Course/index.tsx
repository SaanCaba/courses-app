import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";

import "./index.css";

interface Props {
  courseInfo: CoursesInfo;
}

function Course({ courseInfo }: Props) {
  const [shortenedDesc, setShortenedDesc] = useState(
    courseInfo.description.slice(0, 200) + "..."
  );
  const [descOpen, setDescOpen] = useState(false);

  const showMore = () => {
    setShortenedDesc(courseInfo.description);
    setDescOpen(true);
  };

  const showLess = () => {
    setShortenedDesc(courseInfo.description.slice(0, 200) + "...");
    setDescOpen(false);
  };

  return (
    <div className="course-container h-full rounded-md">
      <div
        className={`${
          courseInfo.mainColor === "henry"
            ? "bg-henry"
            : courseInfo.mainColor === "platzi"
            ? "bg-white"
            : "bg-coder"
        } course-container card-image-size rounded-t-md flex justify-center`}
      >
        <img
          className="h-full w-full object-contain p-5"
          src={courseInfo.logo}
        />
      </div>
      <div
        className={`${
          descOpen ? "course-desc-container-opened" : "course-desc-container"
        } bg-gray  flex flex-col gap-2 p-4`}
      >
        <a href={courseInfo.link} className="w-32" target="_blank">
          <div className="p-2 flex gap-2   bg-white rounded">
            <BiLinkAlt size={25} />
            <span className="font-semibold roboto-condensed">
              {courseInfo.name}
            </span>
          </div>
        </a>
        <div>
          <p className={`text-lg `}>{shortenedDesc}</p>
          <button className="cursor-default flex justify-center w-full">
            {descOpen ? (
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => showLess()}
                size={20}
              />
            ) : (
              <AiFillCaretDown
                className="cursor-pointer"
                onClick={() => showMore()}
                size={20}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
