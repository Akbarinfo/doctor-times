import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#42b2fc] p-10">
      <div className="container">
        <div className="flex justify-between mb-10">
          <ul className="flex gap-10">
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition"
              >
                Как пользоваться
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition"
              >
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition"
              >
                Условия использования
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition"
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-base text-white hover:text-slate-200 transition flex content-end"
              >
                Еще{" "}
                <span>
                  <FaChevronDown className="text-xs inline-block ml-1" />
                </span>
              </Link>
            </li>
          </ul>

          <div className="flex gap-10">
            <Link
              to=""
              className="text-base text-white hover:text-slate-200 transition"
            >
              Войти
            </Link>

            <Link
              to=""
              className="text-base text-white hover:text-slate-200 transition"
            >
              Регистрация
            </Link>
          </div>
        </div>
        <div className="bg-[#E0E0E1] h-[1px] mb-6"></div>

        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="/images/logo-footer.svg" alt="logo-footer" />
          </Link>
          <p className="text-white">© 2010-2023 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
