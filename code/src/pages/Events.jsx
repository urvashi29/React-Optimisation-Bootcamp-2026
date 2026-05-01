import React, { useMemo, useState } from "react";
import EventsCard from "../components/EventsCard";

const allEvents = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  title: `Tech Connect: Summit ${i}`,
  speaker: `Speaker ${i}`,
}));

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useMemo(() => {

  // }, [state depenpencies])

  // without hook
  // const events = allEvents.filter((event) => {
  //   console.log("filtering 5000 records");
  //   return event.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const filteredEvents = useMemo(() => {
    console.log("filtering 5000 records");
    return allEvents.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div
      className={`p-8 rounded-2xl shadow-sm border transition-colors ${
        isDarkMode
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-white border-200 text-slate-900"
      } `}
    >
      {/* Toggle  */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Event Schedule</h2>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-md hover:bg-indigo-200"
        >
          Toggle Theme
        </button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 rounded-xl border text-black shadow-sm focus:ringindogo-200"
      />

      <EventsCard events={filteredEvents} />
    </div>
  );
};

export default Events;
