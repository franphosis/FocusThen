export default function Tasks() {
  return (
    <section className="min-w-0 w-full mx-auto max-w-lg px-1">
      <div className="bg-surface rounded-xl p-5 text-lg">
        <h2>
          <b>Tasks</b>
        </h2>
        <p className="text-text-muted mb-4 text-base">
          What are today's tasks?
        </p>

        <div className="md:flex md:gap-2">
          <input
            type="text"
            placeholder="Add a task..."
            className="h-11 w-full rounded-full border border-white/10 px-4 text-sm text-white placeholder:text-[#635e70] outline-none transition focus:border-[#8b7cf6] focus:ring-2 focus:ring-[#8b7cf6]/30"
          />

          <div className="mt-2 flex gap-2 md:mt-0">
            <div className="flex h-10 flex-1 items-center rounded-full border border-white/10 px-4">
              <button className="text-white/80">−</button>
              <span className="mx-4 text-sm text-white">1</span>
              <button className="text-white/80">+</button>
            </div>

            <button className="h-10 w-10 shrink-0 mb-4 rounded-full bg-secondary text-xl text-zinc-950">
              +
            </button>
          </div>
        </div>
        <ul className="rounded-3xl border border-dashed border-white/10 px-3 py-8 text-center">
          <li className="text-sm text-white/60 p-14">
            No tasks yet. Add one to focus on.
          </li>
        </ul>
      </div>
    </section>
  );
}
