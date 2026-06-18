import * as React from "react";

/**
 * Headline metric tile — exam ranks, contest ratings, benchmark scores.
 * @startingPoint section="Portfolio" subtitle="Headline metric / KPI tile" viewport="360x180"
 */
export interface StatCardProps {
  /** The headline figure, e.g. "1046" or "0.8160". */
  value: React.ReactNode;
  /** Small unit/suffix shown in accent color, e.g. "AIR" or "AUC". */
  unit?: React.ReactNode;
  /** Mono uppercase caption above the value. */
  label?: React.ReactNode;
  /** Supporting line below. */
  sub?: React.ReactNode;
  /** Accent tone. @default "photon" */
  tone?: "photon" | "optic" | "resonance" | "signal" | "lime";
  style?: React.CSSProperties;
  className?: string;
}

/** Headline metric tile — exam ranks, contest ratings, benchmark scores. */
export function StatCard(props: StatCardProps): JSX.Element;
