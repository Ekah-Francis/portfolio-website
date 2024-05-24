import React from "react";

const Skillcard = ({ skill }) => {
  return (
    <li className="skill shrink overflow-hidden rounded-md px-2 py-6 text-center shadow-md ring-1 ring-gray-200 xs:px-6 xs:py-10">
      <img
        className="mx-auto h-[40px] w-[80px] object-contain xs:h-[80px] xs:w-[150px]"
        src={skill.logo}
        alt={skill.name + " logo"}
        loading="lazy"
      />
      <h3 className="text-muted mx-auto mt-6 cursor-default font-PoppinsSemiBold text-base uppercase xs:text-lg">
        {skill.name}
      </h3>
    </li>
  );
};

export default Skillcard;
