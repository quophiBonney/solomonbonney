import { motion } from "framer-motion";
function RotateAnimation({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      //   viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      variants={{
        visible: {
          scale: 1,
        },
        hidden: { scale: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
export default RotateAnimation;
