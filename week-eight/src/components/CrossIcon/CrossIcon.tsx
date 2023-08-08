import Cross from "./../../assets/crossSolid.svg";

import "./styled.css";

interface CrossIconProps {
  onClickHandler: () => void;
}

const CrossIcon = ({ onClickHandler }: CrossIconProps) => {
  return (
    <div className="cross-icon-wrapper" onClick={onClickHandler}>
      <Cross />
    </div>
  );
};

export { CrossIcon };
