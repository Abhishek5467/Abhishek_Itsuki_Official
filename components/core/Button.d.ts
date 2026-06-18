import * as React from "react";

/**
 * Primary action control props.
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "signal";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as an anchor when set. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

/**
 * Primary action control. Photon-cyan fill for the main CTA, outlined
 * ghost/secondary for lower emphasis, signal-red for destructive/alert.
 */
export function Button(props: ButtonProps): JSX.Element;
