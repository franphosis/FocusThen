export default function Hero() {
  return (
    <section className="w-full mx-auto max-w-lg px-1">
      <div className="rounded-xl p-6 bg-surface sm:p-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57]">
            Pomodoro
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57]">
            Short Break
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57]">
            Long Break
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57]">
            Deep Work
          </button>
        </div>
        <h1 className="text-center mb-4 text-7xl tracking-wide sm:text-8xl">
          <b>25:00</b>
        </h1>
        <div className="max-w-sm mx-auto mb-2 rounded-xl bg-[#403e57] animate-fade-in stagger-1 sm:mb-4">
          <input
            className="w-full px-4 py-3 rounded-xl text-text placeholder:text-text-muted outline-none transition-colors animate-fade-in  focus:border-secondary focus:ring-1"
            type="text"
            placeholder="What task are you focusing on?"
          />
        </div>
        <div className="flex items-center justify-center gap-2 sm:mb-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center w-48 py-2 rounded-xl text-xl text-zinc-950 bg-secondary">
            <b>Pause</b>
          </button>
          <button className="flex items-center transition duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus-icon lucide-plus size-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>30s</span>
          </button>
        </div>
      </div>
    </section>
  );
}
