import React, { memo } from "react";

const SessionItem = memo(({ session, isBookmarked, onBookmark }) => {
  console.log(`50 vip sessions: ${session.id}`);

  return (
    <div className="p-4 border border-slate-200 rounded-lg-flex flex justify-between items-center bg-slate-50">
      <span className="font-medium text-slate-800">{session.name}</span>
      <button
        onClick={() => onBookmark(session.id)}
        className={`px-3 py-1 rounded-md text-sm font-bold transition-colors 
    ${isBookmarked ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
      >
        {isBookmarked ? "Bookmarked" : "Bookmark"}
      </button>
    </div>
  );
});

export default SessionItem;
