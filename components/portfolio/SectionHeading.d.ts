import * as React from "react";

export interface SectionHeadingProps {
  /** Mono uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Optional section index, e.g. "01". */
  index?: React.ReactNode;
  /** Title. Wrap a span in <em> for a gradient highlight. */
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** @default "start" */
  align?: "start" | "center";
  className?: string;
}

/** Eyebrow + display title + description — the standard section opener. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
