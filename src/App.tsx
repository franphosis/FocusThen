import Header from "./components/Header";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings/Settings";
import PreferenceSettings from "./components/Settings/PreferenceSettings";
import SettingToggle from "./components/Settings/SettingToggle";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [focusDuration, setFocusDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [deepWorkDuration, setDeepWorkDuration] = useState(50);

  const [autoStartSessions, setAutoStartSessions] = useState(false);
  const [autoStartBreaks, setAutoStartBreaks] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <>
      <Header></Header>
      <main className="mx-auto w-full max-w-7xl px-4">
        <div className="grid min-w-0 gap-6 lg:grid-cols-2">
          <Hero
            focusDuration={focusDuration}
            shortBreakDuration={shortBreakDuration}
            longBreakDuration={longBreakDuration}
            deepWorkDuration={deepWorkDuration}
          />
          <Tasks />
          <Settings
            focusDuration={focusDuration}
            setFocusDuration={setFocusDuration}
            shortBreakDuration={shortBreakDuration}
            setShortBreakDuration={setShortBreakDuration}
            longBreakDuration={longBreakDuration}
            setLongBreakDuration={setLongBreakDuration}
            deepWorkDuration={deepWorkDuration}
            setDeepWorkDuration={setDeepWorkDuration}
          />
          <PreferenceSettings />
        </div>
        <article></article>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
