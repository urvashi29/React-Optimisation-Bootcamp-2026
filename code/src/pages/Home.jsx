import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
      <h1 className="text-5xl font-extrabold text-slate-900">
        TechConnect <span className="text-indigo-600">Portal</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl">
        A performance testing ground for React Optimization Hooks. Explore the
        tabs to debug heavy renders, un-memoized functions, and concurrent UI
        blocking.
      </p>
    </div>
  );
}
