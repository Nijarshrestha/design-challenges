import React from "react";
import "./styled.css";

import johnMayerImage from "../../assets/john-mayer.jpeg";

const AgendasProfile = () => {
  return (
    <div className="agendas-container">
      AgendasProfile
      <div className="profile-wrapper">
        <img src={johnMayerImage} />
      </div>
    </div>
  );
};

export { AgendasProfile };
