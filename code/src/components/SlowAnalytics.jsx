import React, { memo } from "react";

const SlowAnalytics = memo(() => {
  console.log("rendering heavy data");

  const items = [];
  for (let i = 0; i < 500; i++) {
    // Artificial heavy computation
    let startTime = performance.now();
    while (performance.now() - startTime < 2) {}
    items.push(
      <div key={i} className="h-2 w-full bg-slate-100 mb-1 rounded"></div>,
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-rose-600 mb-4">
        Warning: Heavy Component Loaded
      </h3>
      <div className="grid grid-cols-5 gap-2">{items}</div>
    </div>
  );
});

export default SlowAnalytics;
