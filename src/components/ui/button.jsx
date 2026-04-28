import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-accent-bright via-accent to-accent-deep text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_24px_-4px_rgba(94,142,255,0.5)] hover:-translate-y-0.5",
        secondary:
          "border border-white/10 bg-white/5 text-white/90 backdrop-blur-xl hover:bg-white/10",
        ghost: "text-white/80 hover:bg-white/5 hover:text-white",
        outline:
          "border border-white/15 bg-transparent text-white hover:bg-white/5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
