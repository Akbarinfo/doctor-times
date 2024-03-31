import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function PathName({ title, subtitle, titleLink }) {
  const classNames = `text-color-gray text-[14px] robotoFont transition hover:text-[#42b2fc]`;
  
  function classLink(link, title) {
    if (link == "") {
      return <p className="text-color text-[14px] robotoFont">{title}</p>;
    } else {
      return (
        <Link to={link} className={classNames}>
          {title}
        </Link>
      );
    }
  }

  function chevronRight() {
    return (
      <span className="text-color-gray text-[12px]">
        <FaChevronRight />
      </span>
    );
  }

  return (
    <div className="flex items-center gap-[10px] mb-6">
      <Link to={"/"} className={classNames}>
        Главная
      </Link>
      {chevronRight()}
      {classLink(titleLink, title)}
      {subtitle != "" && (
        <>
          {chevronRight()}
          {classLink("", subtitle)}
        </>
      )}
    </div>
  );
}
