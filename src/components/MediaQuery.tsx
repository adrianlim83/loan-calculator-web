export const breakpoints = {
  desktop: 1024,
  tablet: 768
};

export const mediaQuery = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};