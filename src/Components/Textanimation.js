// AnimatedTitle.js

import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 30%;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle({text, style, style2}) {
 // This would normally be passed into this component as a prop!
  
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <Title aria-label={text} role="heading" style={style2}>
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  style={style}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </Title>
  );
}