import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Home, Radio } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: "/events", name: "Events", icon: <Calendar size={18} /> },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { path: "/live", name: "Live Feed", icon: <Radio size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <nav className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-xl tracking-wide text-indigo-400">
                <Link to="/">TechConnect</Link>
              </span>
            </div>

            <div className="flex space-x-2 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    location.pathname === item.path
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">{children}</main>
    </div>
  );
}
