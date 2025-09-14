import Divider from "./Divider";

function TitleDesc({ Title, description, subtitle, layout = "default" }) {
  const words = Title.split(" ");
  const firstWord = words[0];
  const restOfTheSentence = words.slice(1).join(" ");

  return (
    <div className="fade-in-up my-6 px-4 text-center md:px-0">
      {layout === "default" && (
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-[#30b364] md:text-4xl">
            <span className="gradient-text">{firstWord}</span>{" "}
            <span className="text-white">{restOfTheSentence}</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm text-white md:text-base">
            {description}
          </p>
          {subtitle && (
            <p className="mx-auto max-w-xl text-base font-semibold text-gray-200 md:text-lg">
              {subtitle}
            </p>
          )}
          <Divider HalfColor={true} className="h-px py-8" />
        </div>
      )}

      {layout === "alt" && (
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold md:text-4xl">
            <span className="text-green-500">{firstWord}</span>{" "}
            {restOfTheSentence}
          </h1>
          <Divider dualColor={true} className="h-px py-8" />
          <p className="mx-auto max-w-xl text-sm font-bold text-black md:text-base">
            {description}
          </p>
          {subtitle && (
            <p className="mx-auto max-w-xl text-base font-semibold text-gray-200 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TitleDesc;
