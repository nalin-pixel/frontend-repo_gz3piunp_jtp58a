import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('beryl_cart')
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('beryl_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id)
      if (idx >= 0) {
        const updated = [...prev]
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 }
        return updated
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (idx) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <main>
        <ProductGrid title="Books" query="book" onAdd={addToCart} />
        <ProductGrid title="Merchandise" query="merch" onAdd={addToCart} />
        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-amber-900/10 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-amber-900">About the Author</h2>
              <p className="mt-3 text-amber-900/80">Rooted in rural Australia, these stories celebrate the land, the cattle, and the communities that care for them. Beryl the Brahman began as a tale told around the yards and has grown into a beloved book for families everywhere.</p>
            </div>
          </div>
        </section>
      </main>
      <CartDrawer open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  )
}

export default App
