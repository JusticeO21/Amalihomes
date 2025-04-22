export const IconChecked = ({
  width = 16,
  height = 16,
  color = "#ffffff",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="16"
        height="16"
        fill={color}
        fillOpacity="0.01"
      />
      <path
        d="M12.5 5L6.5 11L3.5 8.00016"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
