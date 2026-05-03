import React, { useState, useTransition } from "react";
import NormalFeed from "../components/NormalFeed";
import SlowAnalytics from "../components/SlowAnalytics";

const LiveFeed = () => {
  const [tab, setTab] = useState("feed");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Live Feed</h2>

      <div className="flex space-x-2 mb-6">
        <TabButton isActive={tab === "feed"} onClick={() => selectTab("feed")}>
          Normal Feed
        </TabButton>
        <TabButton
          isActive={tab === "analytics"}
          onClick={() => selectTab("analytics")}
        >
          Heavy Analytics
        </TabButton>
      </div>

      <div className="min-h-[400px] border-t border-slate-100 pt-6">
        {/* If transition is pending, we can show a subtle indicator without freezing the UI */}
        {isPending && (
          <p className="text-indigo-600 font-bold mb-4 animate-pulse">
            Loading Heavy Tab in background...
          </p>
        )}

        {tab === "feed" && <NormalFeed />}
        {tab === "analytics" && <SlowAnalytics />}
      </div>
    </div>
  );
};

export default LiveFeed;

const TabButton = ({ children, isActive, onClick }) => {
  console.log(children);

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-indigo-600 text-white"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
};
