import React from "react";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

//database
import doctors from "../../../database/doctorsInfo.json";

function OtherDoctors() {
  return (
    <div className="mt-9 overflow-hidden">
      <h3 className="text-3xl text-color gilroyM mb-6">Другие врачи</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "10px",
          type: "loop",
          drag: "free",
          arrows: false,
          pagination: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {doctors.slice(0, 9).map((doctor, key) => (
          <SplideSlide
            key={key + 8}
            className="rouded-2xl overflow-hidden w-full min-w-[384px] max-w-[384px]"
          >
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
                  <span className="text-color-gray mb-1 mr-1">
                    {info.title}
                  </span>
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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default OtherDoctors;
