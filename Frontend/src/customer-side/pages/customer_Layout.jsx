import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Home from "../pages/home";
import Honda from "../pages/Honda";
import Hundia from "../pages/hundia";
import Suzuki from "../pages/suzuki";
import Toyota from "../pages/toyota";
import Kia from "../pages/kia";
import Mg from "../pages/mg";
import Bmw from "../pages/bmw";

function ScrollAnimationWrapper({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Customer_Layout() {
  return (
    <>
      <ScrollAnimationWrapper>
        <Home />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Bmw />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Honda />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Hundia />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Suzuki />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Toyota />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Kia />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Mg />
      </ScrollAnimationWrapper>

    </>
  );
}

export default Customer_Layout;