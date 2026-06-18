import * as React from "react";

/**
 * The workhorse surface — research cards, project tiles, stat panels.
 * @startingPoint section="Core" subtitle="Glass & solid surface containers" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Surface treatment. @default "default" */
  variant?: "default" | "glass" | "outline" | "sunken";
  /** Inner padding. @default "md" */
  padding?: "none" | "sm" | "md" | "lg";
  /** Hover lift + photon border. @default false */
  interactive?: boolean;
  /** Show a 2px top accent rule. @default false */
  accent?: boolean;
  /** CSS color/gradient for the accent rule. */
  accentColor?: string;
  /** Mono corner registration label, e.g. "FIG.01". */
  tick?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/** The workhorse surface — research cards, project tiles, stat panels. */
export function Card(props: CardProps): JSX.Element;
