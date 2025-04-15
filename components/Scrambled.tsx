import React, { useState, useRef, useEffect } from "react";

const randomLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

const ScrambledText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const originalText = children;
  const [displayText, setDisplayText] = useState(originalText);
  const frameRef = useRef(0);
  const animFrame = useRef<number | null>(null);

  const animate = () => {
    if (frameRef.current < 30) {
      if (frameRef.current % 3 === 0) {
        const scrambled = originalText
          .split("")
          .map(
            () =>
              randomLetters[Math.floor(Math.random() * randomLetters.length)]
          )
          .join("");
        setDisplayText(scrambled);
      }
      frameRef.current++;
      animFrame.current = requestAnimationFrame(animate);
    } else {
      setDisplayText(originalText);
    }
  };

  const handleMouseEnter = () => {
    frameRef.current = 0;
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    animate();
  };

  const handleMouseLeave = () => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    setTimeout(() => setDisplayText(originalText), 200);
  };

  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-colors duration-300 ${className}`}
    >
      {displayText}
    </span>
  );
};

export default ScrambledText;
