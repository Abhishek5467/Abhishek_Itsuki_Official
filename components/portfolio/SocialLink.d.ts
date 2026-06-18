import * as React from "react";

export interface SocialLinkProps {
  network: React.ReactNode;
  /** @-handle or username shown in mono. */
  handle?: React.ReactNode;
  /** Icon: a URL string (e.g. simple-icons) or an SVG node. */
  icon?: string | React.ReactNode;
  href?: string;
  /** Per-brand hover glow color, e.g. "#0A66C2". */
  color?: string;
  /** @default true */
  arrow?: boolean;
  className?: string;
}

/** Branded social link row — icon + network + handle, with per-brand hover glow. */
export function SocialLink(props: SocialLinkProps): JSX.Element;
