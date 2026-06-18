import * as React from "react";

export interface AvatarProps {
  src: string;
  alt?: string;
  /** Pixel size. @default 56 */
  size?: number;
  /** Photon gradient ring. @default false */
  ring?: boolean;
  glow?: boolean;
  /** Rounded-square instead of circle. @default false */
  square?: boolean;
  /** Show a green "online" status dot. @default false */
  status?: boolean;
  className?: string;
}

/** Portrait with optional gradient ring, glow and status dot. */
export function Avatar(props: AvatarProps): JSX.Element;
