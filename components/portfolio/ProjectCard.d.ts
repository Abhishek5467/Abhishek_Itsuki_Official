import * as React from "react";

/**
 * Project / work tile with cover media, tags and hover lift.
 * @startingPoint section="Portfolio" subtitle="Project tile with cover + tags" viewport="380x340"
 */
export interface ProjectCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Mono category chip over the media, e.g. "Computer Vision". */
  category?: React.ReactNode;
  /** Cover image URL. Omit for a blank gridded placeholder. */
  image?: string;
  imageAlt?: string;
  /** Tech / tool labels. */
  tags?: React.ReactNode[];
  href?: string;
  /** Show the corner arrow. @default true */
  arrow?: boolean;
  className?: string;
}

/** Project / work tile with cover media, tags and hover lift. */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
