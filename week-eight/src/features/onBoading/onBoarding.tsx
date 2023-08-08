import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { CardOne } from "../../components/Cards/CardOne/CardOne";
import { CardTwo } from "../../components/Cards/CardTwo/CardTwo";
import { CrossIcon } from "../../components/CrossIcon/CrossIcon";
import { DotPagination } from "../../components/DotPagination/DotPagination";

import DBIcon from "./../../assets/MdiDatabaseSettingsOutline.svg";
import CheckIcon from "./../../assets/IonCheckmarkCircle.svg";

import "./styled.css";

interface OnboardingModuleProps {
  onCloseModal: () => void;
}

export default function OnboardingModule({
  onCloseModal,
}: OnboardingModuleProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="onboarding-module-container">
      <div className="header-container">
        <CrossIcon onClickHandler={onCloseModal} />
      </div>
      <SwipeableViews
        enableMouseEvents
        style={{ width: "auto" }}
        index={activeIndex}
        onChangeIndex={(index) => setActiveIndex(index)}
      >
        <div>
          <div className="image-container">
            <CardOne />
            <CardTwo />
          </div>
          <div className="content-container">
            <h4>Get Started</h4>
            <p>
              Get started right away and track your revenue. On a clear
              dashboard you can easily monitor all your progress live and watch
              your success grow.
            </p>
          </div>
        </div>
        <div className="content-container">
          <h4>Get Starting, Step One</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            beatae, voluptatibus impedit ut fugiat magni officia sequi provident
            hic cumque perferendis voluptates sapiente consequuntur ipsa porro
            vel tempore vitae sunt.
          </p>
          <div className="icon-wrapper">
            <DBIcon />
          </div>
        </div>
        <div className="content-container">
          <h4>Well Done!!!</h4>
          <p style={{ wordBreak: "break-all" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          </p>
          <div style={{ margin: "48px 0px" }}>
            <CheckIcon />
          </div>
        </div>
      </SwipeableViews>
      <div className="pagination-container">
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <DotPagination
                key={index}
                activeIndex={index === activeIndex}
                onClickHandler={() => setActiveIndex(index)}
              />
            );
          })}
      </div>
      <div className="footer-container">
        <SecondaryButton
          text="Back"
          isFullWidth
          onClickHandler={() =>
            setActiveIndex((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : 0))
          }
        />
        <PrimaryButton
          text="Continue"
          isFullWidth
          onClickHandler={() =>
            setActiveIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 2))
          }
        />
      </div>
    </div>
  );
}
