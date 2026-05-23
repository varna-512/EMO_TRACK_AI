import { useNavigate } from "react-router-dom";
function HeroSection() {
   const navigate = useNavigate();
  return (

    <div className="w-full bg-[#efe8ff] rounded-[30px] px-10 py-7 flex items-center justify-between">

      {/* LEFT */}
      <div className="max-w-[580px]">

        <p className="text-[13px] font-medium text-[#7c3aed] mb-3">
          Emotional Wellness Platform
        </p>

        <h1 className="text-[34px] leading-[46px] font-bold text-gray-900">

          Understand your emotions with AI-powered insights

        </h1>

        <p className="text-gray-500 text-[15px] leading-7 mt-4 max-w-[520px]">

          Analyze facial expressions, voice, typing behavior and pulse data to better understand your emotional wellness.

        </p>

        <button
  onClick={() => navigate("/assessment")}
  className="
  bg-[#7c3aed]
  hover:bg-[#6d28d9]
  text-white
  px-6
  py-3
  rounded-2xl
  font-medium
  transition
  "
>
  Start Assessment
</button>

      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center justify-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="wellness"
          className="w-[170px]"
        />

      </div>

    </div>
  );
}

export default HeroSection;