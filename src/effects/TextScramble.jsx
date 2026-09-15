import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

export default function TextScramble({ text, className = '', delay = 0 }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const length = text.length;
    const totalFrames = length * 2 + 10;
    let animationFrameId;

    const timeout = setTimeout(() => {
      const animate = () => {
        const progress = Math.min(frame / totalFrames, 1);
        const revealedCount = Math.floor(progress * length);

        let scrambled = '';
        for (let i = 0; i < length; i++) {
          if (i < revealedCount) {
            scrambled += text[i];
          } else if (text[i] === ' ') {
            scrambled += ' ';
          } else {
            scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplay(scrambled);
        frame++;

        if (frame <= totalFrames) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setDisplay(text);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, delay]);

  return <span className={className}>{display}</span>;
}
