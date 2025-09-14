// LinkWithIcon.jsx
import { Link } from "react-router-dom";
import { handleContactClick } from "../../utils/smoothScroll";

function LinkWithIcon({ Icon, label, to, isDesktop = false, onClick }) {
  // Handle Contact link specially - scroll to footer instead of routing
  if (to === "/contact") {
    const handleClick = (e) => {
      handleContactClick(e);
      if (onClick) onClick();
    };

    return (
      <button
        onClick={handleClick}
        className={`${
          isDesktop
            ? "flex items-center gap-2 px-3 py-2 font-medium text-white transition-colors duration-200 hover:text-green-400"
            : "hover:bg-opacity-20 flex w-full items-center gap-2 rounded-lg p-4 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
        }`}
      >
        {Icon && <Icon size={18} />}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${
        isDesktop
          ? "flex items-center gap-2 px-3 py-2 font-medium text-white transition-colors duration-200 hover:text-green-400"
          : "hover:bg-opacity-20 flex w-full items-center gap-2 rounded-lg p-4 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </Link>
  );
}

export default LinkWithIcon;
