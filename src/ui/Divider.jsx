function Divider({ text = "", dualColor = false, className = "" }) {
  // Two-color divider when no text
  if (!text && dualColor) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="h-1 flex-1 bg-black" />
        <div className="h-1 flex-1 bg-[#30b364]" />
      </div>
    );
  }

  // Default black divider when no text
  if (!text) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="h-1 flex-1 bg-black" />
        <div className="h-1 flex-1 bg-black" />
      </div>
    );
  }

  // Divider with text
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gray-300" />
      <span>{text}</span>
      <div className="h-px flex-1 bg-gray-300" />
    </div>
  );
}

export default Divider;
