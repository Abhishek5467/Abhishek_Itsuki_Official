import * as React from "react";

export interface MarqueeProps {
  /** Items to scroll — strings or nodes. Duplicated automatically. */
  items?: React.ReactNode[];
  /** Separator between items. @default a cyan diamond */
  separator?: React.ReactNode;
  /** Seconds per loop. Lower = faster. @default 28 */
  speed?: number;
  /** Item font-size. @default "1.4rem" */
  size?: string;
  /** Gap between items. @default "3rem" */
  gap?: string;
  /** Scroll right-to-left reversed. @default false */
  reverse?: boolean;
  className?: string;
}

/** Infinite horizontal ticker for skills / tech keywords. Pauses on hover. */
export function Marquee(props: MarqueeProps): JSX.Element;
