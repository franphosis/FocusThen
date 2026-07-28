export default function Header() {
  return (
    <header className="sticky top-0 z-50 max-w-4xl mx-auto mb-8">
      <nav className="flex items-center justify-between p-4 border-1 rounded border-slate-900 border-solid rounded-xl">
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-plus-icon lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>

          <h2 className="">
            <strong>FocusThen</strong>
          </h2>
        </span>
        <button className="bg-[#bdb1e0] px-3 py-2 text-zinc-950 rounded-xl">
          Soon...
        </button>
      </nav>
    </header>
  );
}
//soon: login, premium, shortcuts
