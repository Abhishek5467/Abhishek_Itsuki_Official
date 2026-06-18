import * as React from "react";

export interface IconButtonProps {
  children?: React.ReactNode;
  href?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Pill shape. @default false */
  round?: boolean;
  /** Transparent background. @default false */
  ghost?: boolean;
  /** Accessible label (also the tooltip). */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

/**
 * Compact square/round control — social icons, toolbar actions.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
