import About from "./about/about";
import Doctors from "./doctors/doctors";
import Contact from "./contact/contact";
import Doctor from "./doctors/doctor/doctor";

export const pagesData = [
  {
    path: "",
    element: <Doctors />,
    title: "home",
  },

  {
    path: "/doctors",
    element: <Doctors />,
    title: "doctors",
  },

  {
    path: "/doctors/doctor/:id",
    element: <Doctor />,
    title: "doctor",
  },
  {
    path: "/about",
    element: <About />,
    title: "about",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "contact",
  },
];
