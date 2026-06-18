import * as React from "react";

export interface SkillMeterProps {
  name: React.ReactNode;
  /** Optional leading icon URL (e.g. simple-icons). */
  icon?: string;
  /** Fill percentage, 0–100. @default 0 */
  value?: number;
  /** Printed figure override, e.g. "1643" or "3★". Defaults to "{value}%". */
  display?: React.ReactNode;
  /** @default "photon" */
  tone?: "photon" | "optic" | "resonance" | "lime";
  className?: string;
}

/** Labeled progress bar for proficiencies and competitive-programming ratings. */
export function SkillMeter(props: SkillMeterProps): JSX.Element;
