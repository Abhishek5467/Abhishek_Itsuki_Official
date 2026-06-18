import * as React from "react";

export interface TimelineItemProps {
  /** Mono date range, e.g. "2023 — 2027". */
  period?: React.ReactNode;
  title?: React.ReactNode;
  /** Institution / company (bolded). */
  org?: React.ReactNode;
  location?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Dot/accent tone. @default "photon" */
  tone?: "photon" | "optic" | "resonance" | "signal" | "lime";
  /** Hollow dot for completed/past nodes. @default false */
  hollow?: boolean;
  className?: string;
}

/**
 * One node in a vertical education / experience timeline. Stack in a column.
 */
export function TimelineItem(props: TimelineItemProps): JSX.Element;
