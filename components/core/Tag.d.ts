import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  /** Leading sigil, e.g. "#" or "λ". */
  prefix?: React.ReactNode;
  /** Enables hover affordance. @default false */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

/**
 * Low-key mono chip for tech stacks, tools and filters.
 */
export function Tag(props: TagProps): JSX.Element;
