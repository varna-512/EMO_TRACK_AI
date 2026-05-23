import { FiBell } from "react-icons/fi";

function Topbar() {

  return (

    <div className="flex items-center justify-between">

      {/* LEFT */}
      <div>

        <h1 className="text-[28px] font-bold text-gray-900 leading-tight">

          Welcome back, Alex 👋

        </h1>

        <p className="text-[14px] text-gray-500 mt-1">

          Take an assessment to analyze your emotional wellness.

        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* NOTIFICATION */}
        <div className="w-10 h-10 rounded-full bg-white border border-[#f1f1f4] flex items-center justify-center">

          <FiBell className="text-gray-500 text-[18px]" />

        </div>

        {/* PROFILE */}
        <div className="bg-white border border-[#f1f1f4] rounded-2xl px-3 py-2 flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>

            <h3 className="text-[14px] font-semibold text-gray-800">

              Alex Morgan

            </h3>

            <p className="text-[12px] text-gray-400">

              Premium User

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;