import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
        accent:
          "border-accent/30 bg-accent/15 text-accent-glow",
        outline:
          "border-white/15 text-white/70",
        gold:
          "border-gold/30 bg-gold/15 text-gold-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
