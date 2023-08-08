import "./styled.css";

interface DotPaginationProps {
  activeIndex: boolean;
  onClickHandler: () => void;
}

export const DotPagination = ({
  activeIndex,
  onClickHandler,
}: DotPaginationProps) => {
  return (
    <div
      className={`dot-wrapper ${activeIndex ? "active-dot" : ""}`}
      onClick={onClickHandler}
    />
  );
};
