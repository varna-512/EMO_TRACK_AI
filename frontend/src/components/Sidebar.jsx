import {
  FiHome,
  FiClipboard,
  FiHeart,
  FiClock,
  FiSettings,
  FiLogOut,
  FiUser,
  FiBarChart2,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { FaBrain } from "react-icons/fa";

function Sidebar() {

  const navItems = [
    ["Dashboard", "/", <FiHome />],
    ["Assessment", "/assessment", <FiClipboard />],
    ["Results", "/results", <FiHeart />],
    ["Recommendations", "/recommendations", <FiHeart />],
    ["History", "/history", <FiClock />],
    ["Insights", "/insights", <FiBarChart2 />],
    ["Profile", "/profile", <FiUser />],
    ["Settings", "/settings", <FiSettings />],
  ];

  return (

    <div className="w-[220px] min-w-[220px] h-screen bg-white border-r border-[#f1f1f4] flex flex-col justify-between px-4 py-6">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="mb-10">

          <div className="flex items-center gap-3">

  <div className="
    w-12
    h-12
    rounded-2xl
    bg-[#f3edff]
    flex
    items-center
    justify-center
  ">

    <FaBrain
  size={28}
  className="text-[#7c3aed]"
/>

  </div>

  <div>

    <h1 className="text-4xl font-bold text-[#7c3aed]">
      EmoTrack
    </h1>

    <p className="text-gray-400 text-sm mt-1">
      emotional wellness
    </p>

  </div>

</div>

         

        </div>

        {/* NAVIGATION */}
        <div className="space-y-1">

          {navItems.map(([label, path, icon]) => (

            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#f4eeff] text-[#7c3aed] font-medium"
                    : "text-gray-500 hover:bg-[#faf8ff]"
                }`
              }
            >

              <span className="text-[18px]">
                {icon}
              </span>

              <span className="text-[15px]">
                {label}
              </span>

            </NavLink>

          ))}

        </div>

      </div>

      {/* BOTTOM */}
      <div>

        {/* MOTIVATION CARD */}
        <div className="bg-[#f6f2ff] rounded-2xl p-4 mb-5">

          <p className="text-[13px] leading-6 text-[#7c3aed]">

            Small steps today,
            better wellness tomorrow 💜

          </p>

        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-3 text-gray-500 hover:text-[#7c3aed] transition">

          <FiLogOut className="text-[18px]" />

          <span className="text-[15px]">
            Logout
          </span>

        </button>

      </div>

    </div>
  );
}

export default Sidebar;