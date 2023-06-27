import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./calendar.css";
import { AgendasProfile } from "./components/agendasProfile/AgendasProfile";
import { Calendar } from "./components/calendar/Calendar";

function App() {
  return (
    <div className="app-container">
      {/* <Calendar /> */}
      <AgendasProfile />
    </div>
  );
}

export default App;
