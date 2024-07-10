import { SVGProps } from "react";

export interface LinkItem {
  id: number;
  name: string;
  to: string;
  icon: any;
  external?: any;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
