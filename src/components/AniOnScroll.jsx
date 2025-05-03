import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AniOnScroll = ({
  children,
  delay = 0,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default AniOnScroll;
