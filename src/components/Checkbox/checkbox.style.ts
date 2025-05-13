import { CheckboxProps } from "./checkbox.config";

export const checkboxBaseStyles =
  "transition duration-150 ease-in-out cursor-pointer select-none";

export const checkboxSizeStyles: Record<
  NonNullable<CheckboxProps["size"]>,
  string
> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const checkboxVariantStyles: Record<
  NonNullable<CheckboxProps["variant"]>,
  string
> = {
  basic: "border border-gray-400 bg-white",
  rounded:
    "appearance-none border border-gray-500 bg-white rounded-full relative transition-all cursor-pointer checked:bg-gray-500 checked:border-gray-500 before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:text-sm before:pointer-events-none before:opacity-0 checked:before:opacity-100 before:transition before:duration-150",
  outlined:
    "appearance-none w-5 h-5 border-2 border-gray-500 bg-white rounded-sm relative transition-all cursor-pointer checked:bg-gray-500 checked:border-gray-500 before:content-['X'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:text-sm before:pointer-events-none before:opacity-0 checked:before:opacity-100 before:transition before:duration-150",

  filled:
    "appearance-none w-5 h-5 bg-gray-200 border border-gray-400 rounded-sm relative transition-all cursor-pointer checked:bg-gray-500 checked:border-gray-500 before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:text-sm before:pointer-events-none before:opacity-0 checked:before:opacity-100 before:transition before:duration-150",
};
