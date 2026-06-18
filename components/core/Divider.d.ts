import * as React from "react";

export interface DividerProps {
  children?: React.ReactNode;
  /** Label position. @default "center" */
  align?: "start" | "center" | "end";
  /** Flat line instead of faded gradient. @default false */
  plain?: boolean;
  className?: string;
}

/** Horizontal rule with an optional centered mono label. */
export function Divider(props: DividerProps): JSX.Element;
