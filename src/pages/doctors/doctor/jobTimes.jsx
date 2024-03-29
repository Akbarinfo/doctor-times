//database
import jobTimes from "../../../database/jobTimes.json";

export default function JobTimes({ week, active, setActive }) {
  function classActive(week, active, time) {
    if (active.day == week.day && active.time == time) {
      return "bg-[#42b2fc] text-white";
    } else {
      return "bg-[#E1F1FF] text-[#575757]";
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {jobTimes.map((time, key) => (
        <button
          key={key + 6}
          onClick={() => setActive({ day: week.day, dayName: week.name, time })}
          className={`rounded border border-[#EDF4FA] gilroyR p-[6px] pl-[18px] pr-[18px] text-xl transition hover:bg-[#4495b7] hover:text-white ${classActive(
            week,
            active,
            time
          )}`}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
