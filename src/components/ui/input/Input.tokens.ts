export type InputSize = keyof typeof inputSizes;

export const inputSizes = {
  xs: "h-[1.188rem] px-2",
  sm: "h-[1.5rem] px-2",
  md: "h-[1.75rem] px-3",
  lg: "h-[1.875rem] px-3",
  xl: "h-[2.25rem] px-4",
} as const;
