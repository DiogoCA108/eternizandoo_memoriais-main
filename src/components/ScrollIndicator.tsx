import { motion } from "framer-motion";
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="flex justify-center"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-5 h-8 md:w-6 md:h-10 border-[1.5px] md:border-2 border-gold-light/50 rounded-full flex justify-center"
      >
        <div className="w-1 h-1.5 md:h-2.5 bg-gold rounded-full mt-1.5 md:mt-2" />
      </motion.div>
    </motion.div>
  );
};
export default ScrollIndicator;
