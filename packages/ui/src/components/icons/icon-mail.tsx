import { IconProps } from "./icon.types";

export const IconMail = ({ className = "", width = "20", height = "16" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Icon">
        <path
          id="Vector"
          d="M19 1.25L10 9.5L1 1.25M19 1.25H1M19 1.25V14C19 14.1989 18.921 14.3897 18.7803 14.5303C18.6397 14.671 18.4489 14.75 18.25 14.75H1.75C1.55109 14.75 1.36032 14.671 1.21967 14.5303C1.07902 14.3897 1 14.1989 1 14V1.25M8.36363 8.00001L1.23126 14.5381M18.7688 14.5381L11.6363 7.99997"
          stroke="#EA690C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
