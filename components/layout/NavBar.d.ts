import * as React from "react";

export interface NavLink {
  label: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Floating glass navigation pill — monogram brand, links, live status, action.
 * @startingPoint section="Layout" subtitle="Floating glass nav pill" viewport="900x90"
 */
export interface NavBarProps {
  /** Wordmark text. @default "Abhishek Singh" */
  brand?: React.ReactNode;
  /** Monogram shown in the gradient tile. @default "AS" */
  monogram?: React.ReactNode;
  links?: NavLink[];
  /** Live status line with pulsing dot. Pass null to hide. */
  status?: React.ReactNode;
  /** Right-side action node, e.g. a <Button/>. */
  action?: React.ReactNode;
  className?: string;
}

/** Floating glass navigation pill — monogram brand, links, live status, action. */
export function NavBar(props: NavBarProps): JSX.Element;
