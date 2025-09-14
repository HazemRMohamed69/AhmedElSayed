import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/img1.jpg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.png",
  "/img5.jpeg",
  "/img6.jpeg",
];

function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[400px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {[...Array(3)].map((_, i) => (
          <motion.img
            key={`${images[index]}-${i}`}
            src={images[index]}
            className="h-full w-1/3 object-cover" // each one takes 1/3 width
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ImageSlideshow;
