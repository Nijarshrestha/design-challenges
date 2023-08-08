interface SecondaryButtonProps {
  text: string;
  onClickHandler: () => void;
  isFullWidth?: boolean;
}

const SecondaryButton = ({
  text,
  onClickHandler,
  isFullWidth = false,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className={`secondary-btn ${isFullWidth ? "full-width" : ""}`}
    >
      {text}
    </button>
  );
};
export { SecondaryButton };
