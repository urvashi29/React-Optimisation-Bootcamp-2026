import React, { memo } from "react";

const EventsCard = memo(({ events }) => {
  console.log("data is iterated");

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
      <ul className="h-[400px] overflow-y-auto divide-y divide-slate-200">
        {events.map((event) => {
          return (
            <li
              key={event.id}
              className="p-4 hover:bg-indigo-50 flex justify-between text-slate-800"
            >
              <span className="font-semibold">{event.title}</span>
              <span className="text-slate-500">{event.speaker}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default EventsCard;
