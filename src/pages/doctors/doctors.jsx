import DoctorsItem from "./doctorsItem";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Select, { components, DropdownIndicatorProps } from "react-select";

//database
import options from "../../database/doctorType.json";
import doctorsInfo from "../../database/doctorsInfo.json";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <FaChevronUp className="select-icon" />
      ) : (
        <FaChevronDown className="select-icon" />
      )}
    </components.DropdownIndicator>
  );
};

export default function Doctors() {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState(doctorsInfo);

  const filterDoctor = async (type) => {
    if (type !== "all") {
      const doc = doctorsInfo.filter((item) => item.speciality === type);
      setDoctors(doc);
    } else {
      setDoctors(doctorsInfo.slice(0, 9));
    }
  };

  const showAssDoctors = async (count) => {
    setLoading(false);
    const doc = doctorsInfo.slice(0, doctors.length + count);
    setDoctors(doc);
    setLoading(true);
  };

  useEffect(() => {
    setDoctors(doctorsInfo.slice(0, 9));
    setLoading(true);
  }, []);

  return (
    <section className="pt-4 pb-20">
      <div className="container">
        <div className="flex gap-6 items-center mb-9">
          <h2 className="text-4xl text-color">Врачи</h2>
          <Select
            options={options}
            isSearchable={false}
            defaultValue={options[0]}
            components={{ DropdownIndicator }}
            onChange={(e) => filterDoctor(e.value)}
          />
        </div>

        {loading && <DoctorsItem doctors={doctors} />}

        {loading && (
          <div className="flex justify-center">
            <button
              onClick={() => showAssDoctors(9)}
              disabled={doctors.length >= doctorsInfo.length}
              className={`${
                doctors.length == doctorsInfo.length &&
                "opacity-50 cursor-not-allowed"
              } bg-[#42b2fc] text-white p-5 pt-4 pb-4 rounded-lg gilroyM hover:text-[#42b2fc] hover:bg-transparent border border-[#42b2fc] transition`}
            >
              Показать еще
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
