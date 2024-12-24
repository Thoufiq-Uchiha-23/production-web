import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { BsCalendar2Plus } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "home",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    text: "About",
    url: "about",
    icon: <LuScrollText />,
  },
  {
    id: 3,
    text: "Services",
    url: "services",
    icon: <GrServices />,
    sublinks: [
      {
        id: 1,
        text: "Digital Marketing",
        url: "services/digital-marketing",
        icon: <GrServices />,
      },
      {
        id: 2,
        text: "Creative Production",
        url: "services/creative-production",
        icon: <GrServices />,
      },
      {
        id: 3,
        text: "Consulting",
        url: "services/consulting",
        icon: <GrServices />,
      },
    ],
  },
  {
    id: 4,
    text: "Projects",
    url: "projects",
    icon: <BsCalendar2Plus />,
  },
  {
    id: 5,
    text: "Blog",
    url: "blog",
    icon: <LuNotebookPen />,
  },
  {
    id: 6,
    text: "Contact",
    url: "contact",
    icon: <MdOutlinePhone />,
  },
];
