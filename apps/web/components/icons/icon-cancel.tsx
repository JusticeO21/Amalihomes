interface IconCancelProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const IconCancel = ({ size = 14, color = "#EA690C", strokeWidth = 1, className = "", ...props }: IconCancelProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Icon">
        <path
          id="Vector"
          d="M12.625 1.375L1.375 12.625M12.625 12.625L1.375 1.375"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconCancel;
