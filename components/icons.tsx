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

export const Logo: React.FC<IconBaseProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    //height={size || height}
    //stroke="currentColor"
    //width={size || width}
    {...props}
    fill="none"
    //viewBox="0 0 25 25"

    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={129}
    height={32}
    viewBox="20 20 651.183 161.336"
    {...props}

    // enableBackground="new 0 0 52 52"
    // xmlSpace="preserve"
  >
    <defs>
      <linearGradient id="a">
        <stop
          offset={0.281}
          style={{
            stopColor: "#006a4d",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.503}
          style={{
            stopColor: "#f4263f",
            stopOpacity: 0.80000001,
          }}
        />
        <stop
          offset={0.728}
          style={{
            stopColor: "#006a4d",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={137.058}
        x2={674.384}
        y1={158.944}
        y2={158.944}
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <text
      xmlSpace="preserve"
      x={18.58}
      y={112.783}
      className="fill-gray-800 dark:fill-gray-200 "
      style={{
        fontSize: "118.618px",
        fontFamily: "&quot",

        //fill: "#1f2229",
        fillOpacity: 1,
        fillRule: "nonzero",
        strokeWidth: 0,
        paintOrder: "stroke fill markers",
      }}
      transform="translate(-7.21 -6.426)"
    >
      <tspan
        x={18.58}
        y={112.783}
        className=" fill-gray-800 dark:fill-gray-200 "
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontFamily: "Arial",

          //fill: "#1f2229",
          fillOpacity: 1,
          fillRule: "nonzero",
          strokeWidth: 0,
        }}
      >
        {"PRODUCTS"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={131.359}
      y={186.774}
      style={{
        fontSize: "77.8084px",
        fontFamily: "&quot",

        fill: "url(#b)",
        fillOpacity: 1,
        fillRule: "nonzero",
        strokeWidth: 0,
        paintOrder: "stroke fill markers",
      }}
      transform="translate(-7.21 -6.426)"
    >
      <tspan
        x={131.359}
        y={186.774}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontFamily: "Arial",

          fill: "url(#b)",
          fillOpacity: 1,
          fillRule: "nonzero",
          strokeWidth: 0,
        }}
      >
        {"BANGLADESH"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={25.038}
      y={180.092}
      style={{
        fontStyle: "italic",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "63.8895px",
        fontFamily: "Arial",

        fill: "#1f2229",
        fillOpacity: 1,
        fillRule: "nonzero",
        strokeWidth: 0,
        paintOrder: "stroke fill markers",
      }}
      transform="translate(-7.21 -6.426)"
    >
      <tspan
        className=" fill-gray-800 dark:fill-gray-200"
        x={25.038}
        y={180.092}
        style={{
          fontStyle: "italic",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "63.8895px",

          //fill: "#1f2229",
          fillOpacity: 1,
          fillRule: "nonzero",
          strokeWidth: 0,
        }}
      >
        {"OF"}
      </tspan>
    </text>
  </svg>
);
