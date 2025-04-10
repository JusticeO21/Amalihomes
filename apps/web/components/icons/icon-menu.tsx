interface IconMenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const IconMenu = ({ size = 18, color = "#262626", strokeWidth = 1.5, className = "", ...props }: IconMenuProps) => {
  const height = size * (14 / 18);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Icon">
        <path
          id="Vector"
          d="M0.75 13H17.25M0.75 7H17.25M0.75 1H17.25"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconMenu;
