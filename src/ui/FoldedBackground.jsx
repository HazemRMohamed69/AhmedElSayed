import worldImg from "../assets/world.png"; // adjust path if needed

function FoldedBackground({ title, description }) {
  return (
    <div className="relative flex h-[400px] w-full bg-[#f5f5f5] perspective-[1000px]">
      {/* Words between the two sides */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <h2 className="mb-5 text-lg text-gray-200 sm:text-xl md:text-2xl">
          {description}
        </h2>
      </div>

      {/* Left wall */}
      <div
        className="h-full flex-1 origin-right rotate-y-[15deg] transform bg-green-600 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${worldImg})` }}
      ></div>

      {/* Right wall */}
      <div
        className="h-full flex-1 origin-left -rotate-y-[15deg] transform bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${worldImg})` }}
      ></div>
    </div>
  );
}

export default FoldedBackground;
