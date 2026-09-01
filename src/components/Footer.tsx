export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* tu icono */}
          <span className="text-sm text-text">FocusThen</span>
          <span className="text-xs text-text-muted">v1.0.0</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="https://github.com/franphosis" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
