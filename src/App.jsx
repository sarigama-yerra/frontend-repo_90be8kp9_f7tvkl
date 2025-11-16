import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Programs from './components/Programs'
import Media from './components/Media'
import Community from './components/Community'
import Store from './components/Store'
import Contact from './components/Contact'

function App() {
  const base = import.meta.env.VITE_BACKEND_URL || ''
  const [journey, setJourney] = useState(null)
  const [media, setMedia] = useState([])
  const [events, setEvents] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [j, m, c] = await Promise.all([
          fetch(`${base}/journey`).then(r=>r.json()),
          fetch(`${base}/media`).then(r=>r.json()),
          fetch(`${base}/community`).then(r=>r.json()),
        ])
        setJourney(j)
        setMedia(m.data || [])
        setEvents(c.events || [])
      } catch (e) {
        console.error(e)
      }
    }
    fetchAll()
  }, [base])

  const addToCart = (p) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === p.id)
      if (found) return prev.map((x) => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
      return [...prev, { ...p, qty: 1 }]
    })
    setCartOpen(true)
  }

  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart])

  const checkout = async (items) => {
    try {
      const payload = {
        items: (items || cart).map((i) => ({ id: i.id, title: i.title, price: i.price, qty: i.qty })),
        provider: 'stripe',
      }
      const res = await fetch(`${base}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      alert('Checkout demo dibuat. Order ID: ' + json.order_id)
    } catch (e) {
      alert('Gagal membuat checkout.')
    }
  }

  const enroll = async (form) => {
    try {
      const res = await fetch(`${base}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('err')
      alert('Pendaftaran terkirim! Tim kami akan menghubungi Anda.')
    } catch (e) {
      alert('Gagal mengirim pendaftaran.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <section className="py-10" id="about">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Tentang Bilal Qori</h2>
            <p className="mt-3 text-slate-700">Bilal adalah qori muda, trainer maqomat dengan pengalaman 12+ tahun, pendiri Soulful Qur’an, serta adik Ustadz Hanan Attaki. Karakter: inspiratif, ramah, digital, pelopor pembelajaran Qur’an kekinian.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} src={`https://images.unsplash.com/photo-1520974859132-8c1e8a3620f9?q=80&w=1200&auto=format&fit=crop`} alt="event" className="h-24 w-full object-cover rounded-md" />
            ))}
          </div>
        </div>
      </section>
      <Journey data={journey} />
      <Programs onEnroll={enroll} />
      <Media items={media} />
      <Community events={events} />
      <Store onAdd={addToCart} onCheckout={checkout} />
      <Contact />

      {cartOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50" onClick={() => setCartOpen(false)}>
          <div className="w-full sm:w-[420px] h-full bg-white shadow-xl" onClick={(e)=>e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between">
              <div className="font-semibold">Keranjang Belanja</div>
              <button onClick={() => setCartOpen(false)} className="text-slate-600">Tutup</button>
            </div>
            <div className="p-4 space-y-3 overflow-auto h-[calc(100%-140px)]">
              {cart.length === 0 ? (
                <div className="text-slate-600">Belum ada produk.</div>
              ) : cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-slate-600">Qty: {item.qty}</div>
                  </div>
                  <div className="font-semibold">Rp {(item.price*15000).toLocaleString('id-ID')}</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>Rp {(total*15000).toLocaleString('id-ID')}</span>
              </div>
              <button onClick={() => checkout()} className="mt-3 w-full px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Checkout</button>
            </div>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-slate-600">© {new Date().getFullYear()} Bilal Qori – Soulful Qur’an</footer>
    </div>
  )
}

export default App
