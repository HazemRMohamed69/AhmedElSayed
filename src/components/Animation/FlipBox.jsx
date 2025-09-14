import { useState, useEffect } from "react";

function FlipBox({ imageSource, title, subtitle, children }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFlip = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="flipbox-mobile hover-lift h-[40vh] w-full cursor-pointer touch-manipulation border-6 border-black shadow-2xl transition-all duration-300 [perspective:1000px] md:h-[40vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateX(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-white [backface-visibility:hidden]">
          <img src={imageSource} className="object-contain" />
          <h2 className="text-center text-2xl font-bold text-[#217a0a]">
            {title}
          </h2>
          <span className="text-1xl font-bold text-black">{subtitle}</span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex [transform:rotateX(180deg)] flex-col items-center justify-center gap-3 bg-[#217b0a] font-bold text-white [backface-visibility:hidden]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FlipBox;
