import Experience from "./Experience/Experience";
import PhoneControls from "./PhoneControls/PhoneControls";
import { useEffect, useState } from "react";

import Navigation from "./Experience/Globals/Navigation";

function App() {
  const [isTouch, setIsTouch] = useState(window.innerWidth <= 1024);

  return (
    <>
      <Navigation />
      <Experience mobile={isTouch} />
      <PhoneControls mobile={isTouch} />
    </>
  );
}

export default App;
