import "./styled.css";

export const CardTwo = () => {
  return (
    <div className="card-two-wrapper">
      <div className="card-two-title-wrapper">Total earnings</div>
      <div className="card-two-amount-wrapper">
        <sup>$</sup>
        <span>812,168.21</span>
      </div>
      <div className="line-graph-wrapper">
        <svg height="40" width="240">
          <polyline
            points="0,38 50,38 80,38 120,10 150,30 200,5, 240,7"
            className="polyline"
          />
        </svg>
      </div>
    </div>
  );
};
