import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** Color tone. @default "photon" */
  tone?: "solid" | "photon" | "optic" | "resonance" | "signal" | "lime" | "neutral";
  /** Show a glowing status dot before the label. @default false */
  dot?: boolean;
  className?: string;
}

/**
 * Mono-caps status pill — research domains, "Online", "Published", rank labels.
 */
export function Badge(props: BadgeProps): JSX.Element;
