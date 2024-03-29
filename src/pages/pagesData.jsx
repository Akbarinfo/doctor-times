import Doctors from "./doctors/doctors";
import Doctor from "./doctors/doctor/doctor";

export const pagesData = [
  {
    path: "",
    element: <Doctors />,
    title: "home",
  },
  {
    path: "/doctors/doctor/:id",
    element: <Doctor />,
    title: "doctor",
  },
];
