import React from "react";
import {
  LayoutDashboard,
  Files,
  ShoppingCart,
  GraduationCap,
  Forklift,
  Mail,
  Bot,
  Calendar,
  User
} from "lucide-react";
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="text-center text-black text-xl mb-2 font-bold">
        BlackCoffer
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <LayoutDashboard />
        <h1>Dashboards</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <Files />
        <h1>Front Pages</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center">
        <ShoppingCart />
        <h1>E-Commerce</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center">
        <GraduationCap />
        <h1>Academy</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <Forklift />
        <h1>Logistics</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <Mail />
        <h1>Email</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <Bot />
        <h1>Chat</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center ">
        <Calendar />
        <h1>Calendar</h1>
      </div>
      <div className="flex gap-4 text-lg font-semibold text-black items-center">
        <User />
        <h1>User</h1>
      </div>
    </div>
  );
};

export default Sidebar;
