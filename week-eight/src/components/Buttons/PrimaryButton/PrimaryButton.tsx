interface PrimaryButtonProps {
  text: string;
  onClickHandler: () => void;
  isFullWidth?: boolean;
}

const PrimaryButton = ({
  text,
  onClickHandler,
  isFullWidth,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className={`primary-btn ${isFullWidth ? "full-width" : ""}`}
    >
      {text}
    </button>
  );
};

export { PrimaryButton };
