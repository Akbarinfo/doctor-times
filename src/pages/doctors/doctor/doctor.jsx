import DocJobTimes from "./docJobTimes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PathName from "../../../components/atoms/pathName/pathName";

//database
import doctors from "../../../database/doctorsInfo.json";
import OtherDoctors from "./otherDoctors";

export default function Doctor() {
  const { pathname } = useLocation();
  const [doctor, setDoctor] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = pathname.split("/").pop(-1);
    const doc = doctors.filter((item) => item.id == id);
    setDoctor(...doc);
    setLoading(true);
  }, []);

  if (!loading) return <p>loading</p>;

  return (
    <section className="pt-4 pb-20">
      <div className="container">
        <PathName
          titleLink={"/doctors"}
          title={"Запись к врачу"}
          subtitle={doctor?.name}
        />
        <div className="flex gap-6 mb-6">
          <div className="rounded-2xl overflow-hidden w-full max-w-[486px] h-full max-h-[305px]">
            <img
              className="object-cover w-full h-full"
              src={doctor?.image}
              alt="img"
            />
          </div>
          <div>
            <h3 className="gilroyM text-[32px] text-color mb-[14px]">
              {doctor?.name}
            </h3>

            {doctor?.fullInfo.map((info, key) => (
              <p key={key + 4} className="gilroyR text-base mb-[14px]">
                <span className="text-color-gray text-[14px]">
                  {info.title}
                </span>
                <br />
                {info.text}
              </p>
            ))}
          </div>
        </div>

        <DocJobTimes doctor={doctor} />

        <OtherDoctors />
      </div>
    </section>
  );
}
