import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li className="text-base">
          <Link
            to={"/"}
            className="text-base gilroyR transition hover:text-[#42b2fc]"
          >
            Главная
          </Link>
        </li>
        <li className="">
          <Link
            to={"/"}
            className="text-base gilroyR transition hover:text-[#42b2fc]"
          >
            Как пользоваться?
          </Link>
        </li>
        <li className="">
          <Link to={"/"} className="text-base gilroyR primary-color">
            Запись к врачу
          </Link>
        </li>
        <li className="">
          <Link
            to={"/"}
            className="text-base gilroyR transition hover:text-[#42b2fc]"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
