import { easeOut, motion, spring } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 100,
    x: -200,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,

    transition: {
      duration: 1,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: spring,
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Dashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full min-h-screen bg-linear-to-br from-orange-500 to-orange-600 p-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold text-white mb-6"
      >
        Welcome to Your Dashboard 🚀
      </motion.h1>
    </motion.div>
  );
}
