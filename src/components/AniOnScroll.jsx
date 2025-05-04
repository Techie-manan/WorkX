import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AniOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ transformOrigin: "bottom" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default AniOnScroll;
