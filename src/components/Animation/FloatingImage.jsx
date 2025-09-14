import { motion } from "framer-motion";

function FloatingImage({ src, alt, width = "w-100", height = "h-100" }) {
  return (
    <div className="relative">
      {/* Glow effect behind the image */}
      <div className="absolute inset-0 scale-150 rounded-full bg-green-400/30 blur-xl"></div>

      <motion.img
        src={src}
        alt={alt}
        className={`${width} ${height} relative z-10 mx-auto object-contain drop-shadow-2xl`}
        animate={{
          y: [-15, 15],
          rotate: [-3, 3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          y: 0,
          transition: { duration: 0.4 },
        }}
      />

      {/* Floating particles around the image */}
      <motion.div
        className="absolute top-2 left-2 h-2 w-2 rounded-full bg-green-300"
        animate={{
          y: [-5, 5],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute right-4 bottom-4 h-1.5 w-1.5 rounded-full bg-green-400"
        animate={{
          y: [5, -5],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );
}

export default FloatingImage;
