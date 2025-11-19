import { useMemo } from 'react'

function CartDrawer({ open, items, onClose, onRemove }) {
  const total = useMemo(() => items.reduce((s, i) => s + (i.price * i.qty), 0), [items])

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl border-l border-amber-900/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-amber-900/10 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-amber-900">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-amber-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-amber-900/70">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex gap-3 items-center border border-amber-900/10 rounded-lg p-3">
                <img src={it.image_url} alt={it.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium text-amber-900">{it.title}</p>
                  <p className="text-sm text-amber-900/70">Qty {it.qty}</p>
                </div>
                <p className="font-semibold text-amber-900">${(it.price * it.qty).toFixed(2)}</p>
                <button onClick={() => onRemove(idx)} className="ml-2 text-amber-700 hover:text-amber-900">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-amber-900/10">
          <div className="flex items-center justify-between mb-3">
            <p className="text-amber-900/80">Subtotal</p>
            <p className="text-amber-900 font-semibold">${total.toFixed(2)}</p>
          </div>
          <button className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800">Checkout</button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
