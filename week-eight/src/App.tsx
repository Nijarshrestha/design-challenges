import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";
import { PrimaryButton } from "./components/Buttons";
import OnboardingModule from "./features/onBoading/onBoarding";

import SwipeableViews from "react-swipeable-views";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <PrimaryButton
        text="Start Onboarding"
        onClickHandler={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <OnboardingModule onCloseModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
