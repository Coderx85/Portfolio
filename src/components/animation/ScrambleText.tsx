"use client";

import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrambleTextProps extends MotionProps {
  /** The text to be scrambled and displayed. Can be a string or an array of strings to cycle through. */
  text: readonly string[];
  /** Optional class name for styling */
  className?: string;
  /** Speed of the scramble effect (0-1), default 0.3 */
  speed?: number;
  /** Step per tick, default 1 */
  step?: number;
  /** Interval in ms between ticks, default 1 */
  tick?: number;
  /** Chance of character being replaced (0-1), default 0.5 */
  chance?: number;
  /** Whether to overdrive the scramble effect (boolean or number), default false */
  overdrive?: boolean | number;
  /** Character set for scrambling, default "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */
  scramble?: number;
  /** Initial delay before starting the scramble effect */
  delay?: number;
  /** Whether to play on mount, default true */
  playOnMount?: boolean;
  /** Whether to replay on hover, default false */
  replayOnHover?: boolean;
  /** Duration to show each text when cycling through an array (ms), default 3000 */
  cycleDuration?: number;
}

export const ScrambleText = ({
  text,
  className,
  speed = 0.3,
  step = 1,
  tick = 1,
  chance = 0.5,
  overdrive = false,
  scramble,
  delay = 0,
  playOnMount = true,
  replayOnHover = false,
  cycleDuration = 3000,
  ...props
}: ScrambleTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const isArray = Array.isArray(text);
  const currentText = isArray ? text[currentTextIndex] : text;

  const { ref, replay } = useScramble({
    text: currentText,
    speed,
    step,
    tick,
    chance,
    overdrive,
    scramble,
    playOnMount,
  });

  useEffect(() => {
    if (!isArray) return;

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % text.length);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, [isArray, text, cycleDuration]);

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block whitespace-pre-wrap font-mono", className)}
      onHoverStart={() => {
        if (replayOnHover) {
          replay();
        }
      }}
      {...props}
    />
  );
};

export default ScrambleText;
