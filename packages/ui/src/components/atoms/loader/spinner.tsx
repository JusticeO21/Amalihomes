interface SpinnerProps {
  className?: string;
  firstBlockClassName?: string;
  firstBlockColor?: string;
  secondBlockClassName?: string;
  secondBlockColor?: string;
  size?: number;
}

const Spinner = ({
  className = "",
  size = 15,
  firstBlockClassName = "",
  secondBlockClassName = "",
  firstBlockColor = "#ea690c",
  secondBlockColor = "#5d5d5d",
}: SpinnerProps) => {
  return (
    <div
      className={`spinner relative ${className}`}
      aria-label="spinner"
      style={{ height: size, width: size }}
    >
      <div
        className={`spinner-before absolute top-[50%] left-[50%] rounded-full ${firstBlockClassName}`}
        style={{ height: size, width: size, backgroundColor: firstBlockColor }}
      ></div>
      <div
        className={`spinner-after absolute rounded-full top-[50%] left-[50%] ${secondBlockClassName}`}
        style={{
          height: size,
          width: size,
          top: `calc(50% - ${size}px)`,
          left: `calc(50% - ${size}px)`,
          backgroundColor: secondBlockColor,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
