import React, { useCallback, useState } from "react";
import SessionItem from "../components/SessionItem";

const sessions = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: `Masterclass: ReactJs ${i}`,
}));

const Dashboard = () => {
  const [bookmarked, setBookMarked] = useState([]);
  const [counter, setCounter] = useState(0);

  // without
  // const handleBookmark = (id) => {
  //   setBookMarked((prev) =>
  //     prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
  //   );
  // };

  const handleBookmark = useCallback((id) => {
    setBookMarked((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  }, []);

  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">VIP Dashbaord</h2>
        <button
          onClick={() => setCounter((c) => c + 1)}
          className="px-4 py-2 bg-emerald-100 text-emerald-700"
        >
          Counter Increment {counter}
        </button>
      </div>

      <p className="mb-4 text-slate-600">
        Bookmarked Session: {bookmarked.length}
      </p>

      <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
        {sessions.map((session) => (
          <SessionItem
            key={sessions.id}
            session={session}
            isBookmarked={bookmarked.includes(session.id)}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
