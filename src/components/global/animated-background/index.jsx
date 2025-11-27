import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-white/30 dark:bg-[#6949E7]/20 mix-blend-overlay dark:mix-blend-multiply transition-all duration-500" />

      <motion.svg
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-[-10%] w-[130vw] h-[130vh] -translate-x-1/2 blur-[100px] opacity-25 dark:opacity-40 transition-all duration-1000"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 1.05, rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        <circle
          cx="600"
          cy="400"
          r="400"
          className="fill-white dark:fill-[#6949E7]"
          fillOpacity="0.5"
        />
        <circle
          cx="200"
          cy="700"
          r="200"
          className="fill-[#eee] dark:fill-[#7e60f7]"
          fillOpacity="0.3"
        />
        <circle
          cx="1000"
          cy="200"
          r="250"
          className="fill-[#fafafa] dark:fill-[#8669ff]"
          fillOpacity="0.2"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBackground;
