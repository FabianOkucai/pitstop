export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold">PITSTOP</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:text-red-500">Services</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          PITSTOP
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Professional automotive services at lightning speed
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Service
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </main>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Service</h3>
            <p className="text-gray-400">Quick turnaround times</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Mechanics</h3>
            <p className="text-gray-400">Certified professionals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💯</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-400">100% satisfaction promise</p>
          </div>
        </div>
      </section>
    </div>
  );
}
