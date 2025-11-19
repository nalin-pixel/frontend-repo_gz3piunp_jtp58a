import { useState } from 'react'

function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 shadow-inner ring-2 ring-white/60" />
          <div className="leading-tight">
            <p className="text-xl font-bold text-amber-900">Beryl the Brahman</p>
            <p className="text-xs text-amber-800/70">Stories from the Australian Outback</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-amber-900/80">
          <a href="#books" className="hover:text-amber-900 transition-colors">Books</a>
          <a href="#merch" className="hover:text-amber-900 transition-colors">Merch</a>
          <a href="#about" className="hover:text-amber-900 transition-colors">About</a>
          <button onClick={onCartOpen} className="ml-2 inline-flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-800 transition-colors">
            <span>Cart</span>
          </button>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-900/20 text-amber-900">
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-amber-900/10 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-amber-900/90">
            <a href="#books" className="py-2">Books</a>
            <a href="#merch" className="py-2">Merch</a>
            <a href="#about" className="py-2">About</a>
            <button onClick={onCartOpen} className="mt-2 inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-lg shadow">Cart</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
