export default function Settings() {
  const settings = [
    { name: "Pomodoro", time: 25 },
    { name: "Short Break", time: 5 },
    { name: "Long Break", time: 15 },
    { name: "Deep Work", time: 90 },
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
                  <button className="flex size-8 items-center justify-center rounded-full border border-white/10 text-text-muted">
                    −
                  </button>

                  <button className="flex size-8 items-center justify-center rounded-full border border-white/10 text-text-muted">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center rounded-2xl border border-white/10 p-4">
            <div className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-base text-text">Auto-start sessions</p>
              <p className="text-sm leading-tight text-text-muted">
                Automatically begin the next focus session.
              </p>
            </div>

            <button
              className="ml-3 h-5 w-9 shrink-0 rounded-full bg-white/10"
              aria-label="Toggle auto-start sessions"
            >
              <span className="block size-4 rounded-full bg-white" />
            </button>
          </div>

          <div className="flex items-center rounded-2xl border border-white/10 p-4">
            <div className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-clock-icon lucide-clock"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-base text-text">Auto-start breaks</p>
              <p className="text-sm leading-tight text-text-muted">
                Roll into breaks without a tap.
              </p>
            </div>

            <button
              className="ml-3 h-5 w-9 shrink-0 rounded-full bg-secondary"
              aria-label="Toggle auto-start breaks"
            >
              <span className="ml-auto block size-4 rounded-full bg-white" />
            </button>
          </div>

          <div className="flex items-center rounded-2xl border border-white/10 p-4">
            <div className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-volume2-icon lucide-volume-2"
              >
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                <path d="M16 9a5 5 0 0 1 0 6" />
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-base text-text">Sound</p>
              <p className="text-sm leading-tight text-text-muted">
                Chime when a session ends.
              </p>
            </div>

            <button
              className="ml-3 h-5 w-9 shrink-0 rounded-full bg-secondary"
              aria-label="Toggle sound"
            >
              <span className="ml-auto block size-4 rounded-full bg-white" />
            </button>
          </div>

          <div className="flex items-center rounded-2xl border border-white/10 p-4">
            <div className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-bell-off-icon lucide-bell-off"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
                <path d="m2 2 20 20" />
                <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-base text-text">Notifications</p>
              <p className="text-sm leading-tight text-text-muted">
                Desktop alerts between sessions.
              </p>
            </div>

            <button
              className="ml-3 h-5 w-9 shrink-0 rounded-full bg-white/10"
              aria-label="Toggle notifications"
            >
              <span className="block size-4 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
