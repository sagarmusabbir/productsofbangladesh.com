"use client";

import { IconSvgProps } from "@/lib/types";
import { IconBaseProps } from "react-icons";
import { PiGarage } from "react-icons/pi";

export const Bar: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g id="Menu / Menu_Duo_LG">
        <path
          id="Vector"
          d="M3 15H21M3 9H21"
          // stroke="currentColor"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const Moon: React.FC<IconBaseProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 25 25"
    width={size || width}
    {...props}
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z"
        // stroke="currentColor"
        className="stroke-gray-900 dark:stroke-gray-100"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export const Sun: React.FC<IconBaseProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    //stroke="currentColor"
    width={size || width}
    {...props}
    fill="none"
    viewBox="0 0 25 25"

    // enableBackground="new 0 0 52 52"
    // xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z"
        // stroke="currentColor"
        className="stroke-gray-900 dark:stroke-gray-100 "
        strokeWidth={2}
      />
    </g>
  </svg>
);

export const Logo: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <PiGarage
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    fill="none"
  ></PiGarage>
);
