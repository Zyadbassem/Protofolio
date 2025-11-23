import Experience from "./Experience/Experience";
import PhoneControls from "./PhoneControls/PhoneControls";
import { useEffect, useState } from "react";

import Navigation from "./Experience/Globals/Navigation";
import LoadingScreen from "./Experience/Globals/LoadingScreen";

function App() {
  const [isTouch, setIsTouch] = useState(window.innerWidth <= 1024);

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <Experience mobile={isTouch} />
      <PhoneControls mobile={isTouch} />
    </>
  );
}

export default App;
