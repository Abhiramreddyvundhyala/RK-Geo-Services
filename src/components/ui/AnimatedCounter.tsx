import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(target);
      setHasAnimated(true);
    }
  }, [isInView, target, springValue, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setCurrent(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {current}
      {suffix}
    </motion.span>
  );
};
