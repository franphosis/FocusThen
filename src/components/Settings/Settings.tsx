import SettingToggle from "./SettingToggle";

type SettingsProps = {
  focusDuration: number;
  setFocusDuration: React.Dispatch<React.SetStateAction<number>>;
  shortBreakDuration: number;
  setShortBreakDuration: React.Dispatch<React.SetStateAction<number>>;
  longBreakDuration: number;
  setLongBreakDuration: React.Dispatch<React.SetStateAction<number>>;
  deepWorkDuration: number;
  setDeepWorkDuration: React.Dispatch<React.SetStateAction<number>>;
};

export default function Settings({
  focusDuration,
  setFocusDuration,
  shortBreakDuration,
  setShortBreakDuration,
  longBreakDuration,
  setLongBreakDuration,
  deepWorkDuration,
  setDeepWorkDuration,
}: SettingsProps) {
  const settings = [
    {
      name: "Pomodoro",
      name2: "Focus Duration",
      time: focusDuration,
      setTime: setFocusDuration,
    },
    {
      name: "Short break",
      time: shortBreakDuration,
      setTime: setShortBreakDuration,
    },
    {
      name: "Long break",
      time: longBreakDuration,
      setTime: setLongBreakDuration,
    },
    {
      name: "Long Focus",
      time: deepWorkDuration,
      setTime: setDeepWorkDuration,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-lg px-1">
      <div className="rounded-2xl bg-surface p-5">
        <div className="mb-6">
          <h2 className="text-lg">
            <b>Session Settings</b>
          </h2>
          <p className="text-text-muted">Tune your rhythm.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {settings.map((setting) => (
            <div
              key={setting.name}
              className="max-w-xs mx-auto w-full rounded-2xl border border-white/10 p-4"
            >
              <p className="mb-2 text-sm text-text-muted">{setting.name}</p>

              <div className="flex items-center justify-between">
                <p className="text-lg text-text">
                  <b>{setting.time}</b>{" "}
                  <span className="text-sm text-text-muted">min</span>
                </p>

                <div className="flex gap-2">
                  <button
                    className="flex size-8 items-center justify-center rounded-full border border-white/10 text-text-muted"
                    onClick={() => {
                      setting.setTime((previous) => {
                        if (previous === 1) {
                          return previous;
                        } else {
                          return previous - 1;
                        }
                      });
                    }}
                  >
                    −
                  </button>

                  <button
                    className="flex size-8 items-center justify-center rounded-full border border-white/10 text-text-muted"
                    onClick={() => {
                      setting.setTime((previous) => {
                        if (previous >= 50) {
                          return previous;
                        } else {
                          return previous + 1;
                        }
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SettingToggle></SettingToggle>
      </div>
    </section>
  );
}
