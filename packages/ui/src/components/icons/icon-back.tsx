export const IconBack = ({
  color = "#EA690C",
  width = 7,
  height = 12,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
    >
      <path
        d="M6 11L1 6L6 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
