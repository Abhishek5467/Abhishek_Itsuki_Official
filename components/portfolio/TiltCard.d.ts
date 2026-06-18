import * as React from "react";

/**
 * 3D parallax surface that tilts toward the cursor with a photon glare.
 * @startingPoint section="Portfolio" subtitle="3D cursor-tilt surface" viewport="420x300"
 */
export interface TiltCardProps {
  children?: React.ReactNode;
  /** Max tilt in degrees toward the cursor. @default 9 */
  intensity?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * 3D parallax surface that tilts toward the cursor with a photon glare —
 * the signature interactive flourish. Respects prefers-reduced-motion.
 */
export function TiltCard(props: TiltCardProps): JSX.Element;
