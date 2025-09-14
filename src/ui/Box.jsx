function Box({ Icon, value, title, unit, description }) {
  return (
    <div className="hover-lift hover-glow fade-in-up flex flex-col justify-center rounded-xl bg-white p-6 text-center text-[#30b364] shadow-lg transition-all duration-300 hover:shadow-2xl">
      {Icon && <Icon className="pulse-glow m-auto h-12 w-12 text-[#30b364]" />}

      <h4 className="gradient-text mt-2 flex items-start justify-center text-2xl font-extrabold">
        {unit && (
          <span className="mr-1 align-super text-sm font-medium text-gray-600">
            {unit}
          </span>
        )}
        <span>{value}</span>
      </h4>

      <span className="mt-1 text-lg font-semibold">{title}</span>

      <span className="text-med mt-1 font-bold text-gray-600">
        {description}
      </span>
    </div>
  );
}

export default Box;
