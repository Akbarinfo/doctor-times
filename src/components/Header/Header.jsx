import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-white p-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <Navbar />

          <div className="flex items-center gap-6">
            <MdLanguage className="text-2xl primary-color" />
            <Link
              to={"/"}
              className="primary-color gilroyM hover:text-black transition"
            >
              Войти
            </Link>
            <Link
              to={"/"}
              className="primary-color gilroyM px-6 py-3 border rounded-lg border-[#42b2fc] hover:bg-[#42b2fc] hover:text-cyan-50 transition"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
