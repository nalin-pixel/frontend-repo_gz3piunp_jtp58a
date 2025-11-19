function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-900">
              Beryl the Brahman
            </h1>
            <p className="mt-4 text-lg text-amber-900/80">
              A heartwarming Australian outback tale. Explore the original book and new merchandise inspired by Beryl's adventures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#books" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-amber-700 text-white shadow hover:bg-amber-800">Shop Books</a>
              <a href="#merch" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-amber-900 border border-amber-900/20 hover:bg-amber-50">Browse Merch</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200/40 to-orange-200/40 blur-2xl rounded-3xl" />
            <img src="https://images.unsplash.com/photo-1599740160314-6e814ede2064?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFobWFuJTIwY2F0dGxlJTIwaW4lMjB0aGUlMjBvdXRiYWNrfGVufDB8MHx8fDE3NjM1MjM4Mjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Brahman cattle in the outback" className="relative rounded-2xl shadow-2xl ring-1 ring-amber-900/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
