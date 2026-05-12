import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface UseCardTiltOptions {
  max?: number;
  perspective?: number;
}

export function useCardTilt({
  max = 5,
  perspective = 1400,
}: UseCardTiltOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 24, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const rotateX = useTransform(sy, (v) => -v * max);
  const rotateY = useTransform(sx, (v) => v * max);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref: ref as unknown as React.RefObject<HTMLElement>,
    rotateX,
    rotateY,
    perspective,
    onPointerMove,
    onPointerLeave,
  };
}
