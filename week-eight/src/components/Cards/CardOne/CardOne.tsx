import { CylinderStack } from "../../CylinderStack/CylinderStack";
import "./styled.css";

const CardOne = () => {
  return (
    <div className="card-one-wrapper">
      <div className="title-wrapper">
        <div>Earnings today</div>
        <div>
          <CylinderStack />
        </div>
      </div>
      <div className="amount-wrapper">
        <sup>$</sup>
        <span>1,421.56</span>
      </div>
      <div className="amount-diff-wrapper">
        <span className="diff-wrapper">+1.5%</span>
        <span>Higher earnings than usual</span>
      </div>
    </div>
  );
};

export { CardOne };
