import { forwardRef, useCallback, useMemo, useRef, useEffect } from "react";
import { motion } from "motion/react";

function useAnimationFrame(callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let frameId;

    const loop = () => {
      callbackRef.current();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();

        positionRef.current = {
          x: x - rect.left,
          y: y - rect.top,
        };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (event) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];

      if (touch) {
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef(
  (
    {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 120,
      falloff = "linear",
      className = "",
      onClick,
      style,
      ...restProps
    },
    ref,
  ) => {
    const letterRefs = useRef([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const lastPositionRef = useRef({ x: null, y: null });

    const parsedSettings = useMemo(() => {
      const parseSettings = (settingsString) =>
        new Map(
          settingsString
            .split(",")
            .map((setting) => setting.trim())
            .filter(Boolean)
            .map((setting) => {
              const [name, value] = setting.split(" ");

              return [
                name.replace(/['"]/g, ""),
                Number.parseFloat(value),
              ];
            }),
        );

      const fromSettings = parseSettings(
        fromFontVariationSettings,
      );

      const toSettings = parseSettings(
        toFontVariationSettings,
      );

      return Array.from(fromSettings.entries()).map(
        ([axis, fromValue]) => ({
          axis,
          fromValue,
          toValue: toSettings.get(axis) ?? fromValue,
        }),
      );
    }, [
      fromFontVariationSettings,
      toFontVariationSettings,
    ]);

    const calculateDistance = useCallback(
      (x1, y1, x2, y2) => {
        return Math.sqrt(
          (x2 - x1) ** 2 +
            (y2 - y1) ** 2,
        );
      },
      [],
    );

    const calculateFalloff = useCallback(
      (distance) => {
        const normalized = Math.min(
          Math.max(1 - distance / radius, 0),
          1,
        );

        switch (falloff) {
          case "exponential":
            return normalized ** 2;

          case "gaussian":
            return Math.exp(
              -((distance / (radius / 2)) ** 2) / 2,
            );

          case "linear":
          default:
            return normalized;
        }
      },
      [radius, falloff],
    );

    const updateLetters = useCallback(() => {
      if (!containerRef?.current) {
        return;
      }

      const { x, y } = mousePositionRef.current;

      if (
        lastPositionRef.current.x === x &&
        lastPositionRef.current.y === y
      ) {
        return;
      }

      lastPositionRef.current = { x, y };

      const containerRect =
        containerRef.current.getBoundingClientRect();

      letterRefs.current.forEach((letterRef) => {
        if (!letterRef) {
          return;
        }

        const rect = letterRef.getBoundingClientRect();

        const letterCenterX =
          rect.left +
          rect.width / 2 -
          containerRect.left;

        const letterCenterY =
          rect.top +
          rect.height / 2 -
          containerRect.top;

        const distance = calculateDistance(
          x,
          y,
          letterCenterX,
          letterCenterY,
        );

        if (distance >= radius) {
          letterRef.style.fontVariationSettings =
            fromFontVariationSettings;

          return;
        }

        const falloffValue =
          calculateFalloff(distance);

        const newSettings = parsedSettings
          .map(
            ({
              axis,
              fromValue,
              toValue,
            }) => {
              const interpolatedValue =
                fromValue +
                (toValue - fromValue) *
                  falloffValue;

              return `'${axis}' ${interpolatedValue}`;
            },
          )
          .join(", ");

        letterRef.style.fontVariationSettings =
          newSettings;
      });
    }, [
      containerRef,
      calculateDistance,
      calculateFalloff,
      parsedSettings,
      fromFontVariationSettings,
      radius,
      mousePositionRef,
    ]);

    useAnimationFrame(updateLetters);

    const words = label.split(" ");
    let letterIndex = 0;

    return (
        <span
          ref={ref}
          onClick={onClick}
          className={className}
          style={{
            display: "inline",
            fontFamily: '"Roboto Flex", sans-serif',
            ...style,
          }}
          {...restProps}
        >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter) => {
              const currentLetterIndex =
                letterIndex++;

              return (
          <motion.span
            key={currentLetterIndex}
            ref={(element) => {
              letterRefs.current[currentLetterIndex] = element;
            }}
            style={{
              display: "inline-block",
              fontFamily: '"Roboto Flex", sans-serif',
              fontVariationSettings: fromFontVariationSettings,
            }}
            aria-hidden="true"
          >
            {letter}
          </motion.span>
              );
            })}

            {wordIndex < words.length - 1 && (
              <span className="inline-block">
                &nbsp;
              </span>
            )}
          </span>
        ))}

        <span className="sr-only">
          {label}
        </span>
      </span>
    );
  },
);

VariableProximity.displayName =
  "VariableProximity";

export default VariableProximity;