function IconButton({ icon: Icon, color = "#ffffff", size = 24, onClick }) {
  return (
    <button onClick={onClick} className="p-2">
      <Icon size={size} color={color} />
    </button>
  );
}
export default IconButton;
