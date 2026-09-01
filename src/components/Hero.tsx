export default function Hero() {
  return (
    <section className="min-w-0 w-full mx-auto max-w-lg px-1 mb-6">
      <div className="w-full rounded-xl p-6 bg-surface md:p-12">
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57] md:text-sm">
            Focus duration
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57] md:text-sm">
            Short Break
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57] md:text-sm">
            Long Break
          </button>
          <button className="px-3 py-2 rounded-2xl text-text-muted text-xs transition-colors hover:bg-[#403e57] md:text-sm">
            Deep Work
          </button>
        </div>
        <h1 className="text-center mb-4 text-7xl tracking-wide md:text-8xl mb-8">
          <b>25:00</b>
        </h1>
        <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
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
          <button className="flex justify-center items-center w-48 py-2 rounded-xl text-xl text-zinc-950 bg-secondary md:text-2xl">
            <b>Start</b>
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
