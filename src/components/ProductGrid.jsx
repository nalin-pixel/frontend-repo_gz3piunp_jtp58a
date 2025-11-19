import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-amber-900/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-amber-50">
        <img src={product.image_url || 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900">{product.title}</h3>
        {product.description && (
          <p className="mt-1 text-sm text-amber-900/70 line-clamp-2">{product.description}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-amber-900 font-bold">${product.price?.toFixed(2)}</p>
          <button onClick={() => onAdd(product)} className="px-3 py-1.5 rounded-lg bg-amber-700 text-white text-sm hover:bg-amber-800">Add</button>
        </div>
      </div>
    </div>
  )
}

function ProductGrid({ title, query, onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products`)
        const data = await res.json()
        const filtered = query ? data.filter(p => p.category?.toLowerCase() === query.toLowerCase()) : data
        setItems(filtered)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [query])

  return (
    <section className="py-12" id={query === 'book' ? 'books' : 'merch'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-amber-900">{title}</h2>
        </div>
        {loading ? (
          <div className="text-amber-900/70">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-amber-900/70">No products yet.</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map(item => (
              <ProductCard key={item.id} product={item} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
