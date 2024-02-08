const generateMotion = (initial: object, animate: object) => ({
  initial: {
    ...initial,
    opacity: 0,
  },
  animate: {
    ...animate,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

export const titleMotion = generateMotion(
  { translateX: "-10rem" },
  { translateX: "0rem" },
);

export const subtitleMotion = generateMotion(
  { translateY: "2rem" },
  { translateY: "0rem" },
);

export const scaleMotion = generateMotion({ scale: 0 }, { scale: 1 });

export const cardMotion = generateMotion(
  { translateY: "100%" },
  { translateY: "0" },
);

export const menuMotion = generateMotion(
  { translateY: "-10rem" },
  { translateY: "5rem" },
);

export const propertyDetails = generateMotion(
  { translateY: "5rem" },
  { translateY: "0rem" },
);
