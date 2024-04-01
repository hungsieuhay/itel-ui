import { useCallback, useEffect, useState } from "react";

interface Option {
  totalSlide: number;
  loop?: number;
}

enum Direction {
  NEXT = 1,
  PREV = -1,
}

export const useSlide = ({ totalSlide, loop }: Option) => {
  const [index, setActive] = useState<number>(0);
  const [direction, setDirection] = useState(Direction.NEXT);

  const onSlide = useCallback(
    (direction: Direction) => {
      setDirection(direction);
      setActive((prev) =>
        prev + direction === totalSlide
          ? 0
          : prev + direction === -1
          ? totalSlide - 1
          : prev + direction
      );
    },
    [totalSlide]
  );

  const onSetActive = (nextIndex: number) => {
    setDirection(nextIndex > index ? Direction.NEXT : Direction.PREV);
    setActive(nextIndex);
  };

  useEffect(() => {
    if (loop) {
      let timeout = setTimeout(() => {
        onSlide(Direction.NEXT);
      }, loop);
      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop, index]);

  return { index, direction, onSlide, onChange: onSetActive };
};
