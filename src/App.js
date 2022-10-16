import Navbar from "./components/Navbar/navbar.js"
import Battery from "./components/Homepage/Battery/battery.js";
import UserSettings from "./components/UserSettings/userSettings.js";
import Profile from "./components/Profile/profile.js";
import People from "./components/Homepage/People/people.js";
import { useEffect, useState } from "react";

function App() {
  const [charge, setCharge] = useState(1);
  const [profileClick, setProfileClick] = useState(false);
  const [settingsClick, setSettingsClick] = useState(false);
  const [id, setId] = useState(null);
  
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
        <Profile charge={charge} setId={setId}/>
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
        <People id={id}/>
      </div>
    );
  }
}

export default App;
