import Navbar from "./components/Navbar/navbar.js"
import Battery from "./components/Homepage/Battery/battery.js";
import UserSettings from "./components/UserSettings/userSettings.js";
import Profile from "./components/Profile/profile.js";
import Map from "./components/Homepage/Map/map.js";
import { useEffect, useState } from "react";

function App() {
  const [charge, setCharge] = useState(1)
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
        <Navbar profileClickCheck={setProfileClick} currProfileClick={profileClick} settingsClickCheck={setSettingsClick} currSettingsClick={settingsClick}/>
        <Profile charge={charge}/>
      </div>
    );
  } else if (settingsClick) {
    return (
      <div className="App">
        <Navbar profileClickCheck={setProfileClick} currProfileClick={profileClick} settingsClickCheck={setSettingsClick} currSettingsClick={settingsClick}/>
        <UserSettings/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar profileClickCheck={setProfileClick} currProfileClick={profileClick} settingsClickCheck={setSettingsClick} currSettingsClick={settingsClick}/>
        <Battery charge={charge} setCharge={setCharge}/>
        <Map/>
      </div>
    );
  }
}

export default App;
