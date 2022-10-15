import Navbar from "./components/Navbar/navbar.js"
import Battery from "./components/Homepage/Battery/battery.js";
import { useEffect, useState } from "react";

function App() {
  const [profileClick, setProfileClick] = useState(false);
  const [settingsClick, setSettingsClick] = useState(false);

  
  useEffect(() => {
    if (profileClick) {
      setSettingsClick(false)
    }
  }, [profileClick])

  useEffect(() => {
    if (settingsClick) {
      setProfileClick(false)
    }
  }, [settingsClick])

  if (profileClick) {
    return (
      <div className="App">
        <Navbar clickCheck={setProfileClick} currClick={profileClick}/>
      </div>
    );
  } else if (settingsClick) {
    return (
      <div className="App">
        <Navbar clickCheck={setProfileClick} currClick={profileClick}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar clickCheck={setProfileClick} currClick={profileClick}/>
        <Battery/>
      </div>
    );
  }
}

export default App;
