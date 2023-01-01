import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import './App.css'

export const Example = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  );
};
