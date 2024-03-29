import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Modal from "../../../components/atoms/modal/Modal";

//database
import times from "../../../database/jobTimes.json";
import monthNames from "../../../database/monthName.json";

// Kichik funksiya, berilgan tilga qarab, qisqacha kundan ismni qaytaradi
function getShortDayNames(language) {
  switch (language) {
    case "ru":
      return [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ];
  }
}

export default function DocJobTimes({ doctor }) {
  const [next, setNext] = useState(false);
  const [active, setActive] = useState();
  const [weekData, setWeekData] = useState();
  const [openImg, setOpenImg] = useState(false);
  const [jobWeekData, setJobWeekData] = useState();
  const [loading, setLoading] = useState(false);

  function randomId() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Hafta ma'lumotlarini olish uchun funksiya
  function getWeekDatas(lang, next) {
    const today = DateTime.now(); // Bugungi sana
    // Haftaning boshlanish sanasi
    const startOfWeek = today.startOf("week");

    // Keyingi haftaning kunlari va ma'lumotlari
    const monDay = [];
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = startOfWeek.plus({ days: next + i });
      const time = times.map((time, key) => {
        return {
          time,
          busy: randomId() == key,
        };
      });
      monDay.push(next == 0 && day.day + 1);
      return {
        day: day.day,
        id: day.weekday,
        name: getShortDayNames(lang)[i],
        month: monthNames[day.month - 1],
        times: time,
      };
    });

    setLoading(false);
    setLoading(true);
    return weekDays;
  }

  function classActive(week, active, time, busy) {
    if (active?.day == week.day && active?.time == time) {
      return "bg-[#42b2fc] text-white";
    } else {
      if (busy) {
        return "bg-red-700 text-white cursor-not-allowed";
      } else {
        return "bg-[#E1F1FF] text-[#575757] hover:bg-[#4495b7]";
      }
    }
  }

  const allJobTimes = async () => {
    setNext(true);
    setWeekData(jobWeekData);
  };

  useEffect(() => {
    const jobweekData = getWeekDatas("ru", 0);
    setWeekData(jobweekData?.slice(0, 3));
    setJobWeekData(jobweekData);
  }, []);

  if (!loading) return <p>loading</p>;

  return (
    <>
      <ul className="mb-6">
        {weekData?.map((week, key) => (
          <li key={key + 5} className="mb-6">
            <p className="text-xl text-[#263238] gilroyM mb-3">
              {week.day} {week.month} {week.name}
            </p>

            <div className="flex flex-wrap gap-3">
              {week.times.map((time, key) => (
                <button
                  key={key + 6}
                  disabled={time.busy}
                  onClick={() =>
                    setActive({
                      day: week.day,
                      month: week.month,
                      dayName: week.name,
                      time: time.time,
                    })
                  }
                  className={`rounded border border-[#EDF4FA] gilroyR p-[6px] pl-[18px] pr-[18px] text-xl transition hover:text-white ${classActive(
                    week,
                    active,
                    time.time,
                    time.busy
                  )}`}
                >
                  {time.time}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {!next && (
        <button
          onClick={() => allJobTimes()}
          className="text-base primary-color gilroyR flex items-center mb-6"
        >
          Еще 4 дня <FaAngleDown className="text-xs ml-3" />
        </button>
      )}

      <button
        onClick={() => setOpenImg(true)}
        className={`${
          // Object.keys(active).length == 0
          active == undefined
            ? "opacity-50 cursor-not-allowed hover:bg-[#42b2fc]"
            : "hover:bg-transparent hover:text-[#42b2fc]"
        } bg-[#42b2fc] rounded-lg border border-[#42b2fc] text-base text-white gilroyM p-6 pt-[14px] pb-[14px] transition`}
      >
        {
          // Object.keys(active).length == 0
          active == undefined
            ? "Выберите время приема"
            : `Выбрать ${active?.day} ${active?.month}, ${active?.time}`
        }
      </button>

      {openImg && <Modal doctor={doctor} info={active} setOpen={setOpenImg} />}
    </>
  );
}
