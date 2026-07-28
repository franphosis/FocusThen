export default function Hero() {
  return (
    <section className="mx-auto max-w-xs sm:max-w-5xl">
      <div className="bg-[#1d1c30] rounded-xl p-8">
        <div className="flex items-center justify-between">
          <button>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
          <button>Deep Work</button>
        </div>
        <h1 className="text-7xl flex justify-center items-center mb-4 tracking-wide sm:text-7xl md:text-8xl">
          <b>25:00</b>
        </h1>
        <div>
          <input type="text" placeholder="What task are you focusing on?" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="flex justify-center items-center px-12 py-2 text-xl text-zinc-950 rounded-xl bg-[#bdb1e0]">
            <b>Start</b>
          </button>
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
          <button>
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
              className="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            30s
          </button>
        </div>
      </div>
    </section>
  );
}
