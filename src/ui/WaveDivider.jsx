function WaveDivider({ color = "#30B364",className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      className={`h-20 w-full ${className}`}
    >
      <path d="M0 0v100c500 0 475-96 500-96s0 96 500 96V0H0Z" fill={color} />
    </svg>
  );
}

export default WaveDivider;
