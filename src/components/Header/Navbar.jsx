import { Link, useLocation } from "react-router-dom";

//database
import navbarItems from "../../database/navbar.json";

export default function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav>
      <ul className="flex gap-6">
        {navbarItems.map((nav, key) => (
          <li key={key + 7} className="text-base">
            <Link
              to={nav.link}
              className={`text-base gilroyR transition hover:text-[#42b2fc] ${
                pathname == nav.link && "primary-color"
              }`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
