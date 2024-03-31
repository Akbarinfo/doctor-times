import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

export default function DoctorsItem({ doctors }) {
  return (
    <ul className="flex flex-wrap gap-6 mb-6">
      {doctors.map((doctor, key) => (
        <li key={key + 2} className="rouded-2xl overflow-hidden max-w-[384px]">
          <div className="overflow-hidden rounded-t-2xl h-[241px]">
            <img
              alt="img"
              src={doctor.image}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-white pt-4 pl-5 pr-5 pb-6 rounded-b-2xl">
            <h3 className="text-xl gilroyM text-color mb-1">{doctor.name}</h3>

            {doctor.fullInfo.map((info, key) => (
              <p key={key + 3} className="flex gilroyR text-[14px]">
                <span className="text-color-gray mb-1 mr-1">{info.title}</span>
                {info.text}
              </p>
            ))}

            <Link
              to={`/doctors/doctor/${doctor.id}`}
              className="group flex items-center primary-color hover:text-[#4495b7] transition mt-3"
            >
              Записаться на прием
              <LuMoveRight className="ml-1 transition group-hover:translate-x-2" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
