import { cn, cvaDefVar, cvaVar } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const variant = cvaVar({
  more: "bg-transparent hover:underline text-black-800",
  register: "bg-black hover:bg-gray-800 text-white",
  confirm: "bg-blue-600 text-white rounded-md hover:bg-blue-700",
  cancel: "bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200",
});

const shape = cvaVar({
  square: "rounded-none",
  primary: "rounded",
  full: "rounded-full",
  default: "rounded-md",
});

const size = cvaVar({
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-6",
  large: "text-lg py-3 px-6",
  default: "px-4 py-2",
});

const weight = cvaVar({
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  default: "",
});

const variants = cvaDefVar({
  variant,
  shape,
  size,
  weight,
});

const defaultVariants = cvaDefVar({
  variant: "more",
  shape: "default",
  size: "default",
  weight: "default",
});

const ClassVariants = cva("", {
  variants,
  defaultVariants,
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ClassVariants> {
  children?: React.ReactNode;
}

export default function Button({ variant, shape, size, weight, children, ...props }: ButtonProps) {
  return (
    <button className={cn(ClassVariants({ variant, shape, size, weight }))} {...props}>
      {children}
    </button>
  );
}

export { defaultVariants as ButtonDefaultVariants, variants as ButtonVariants };
