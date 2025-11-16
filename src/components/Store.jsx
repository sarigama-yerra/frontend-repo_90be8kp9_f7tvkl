import { useEffect, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

export default function Store({ onAdd, onCheckout }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/products`);
        const json = await res.json();
        setProducts(json.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="store" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Bilal Qori Store</h2>
        <p className="text-slate-600 mt-2">Buku, eBook, audio/video murottal eksklusif, merchandise, membership, dan alat tilawah.</p>

        {loading ? (
          <div className="mt-8 text-slate-600">Memuat produk…</div>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p.id} className="p-4 rounded-lg border">
                <img src={p.image || "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"} alt={p.title} className="w-full h-40 object-cover rounded-md"/>
                <div className="mt-3 font-semibold">{p.title}</div>
                <div className="text-sm text-slate-600">{p.category}</div>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  <Star size={16} /> <span className="text-sm">{p.rating || 5.0}</span>
                </div>
                <div className="mt-2 font-bold">Rp {(p.price * 15000).toLocaleString("id-ID")}</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => onAdd(p)} className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"><ShoppingCart size={16}/> Tambah</button>
                  <button onClick={() => onCheckout([p])} className="px-4 py-2 rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-50">Beli</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 p-4 rounded-lg bg-emerald-50 border border-emerald-100">
          <div className="font-semibold">FAQ Toko & Bantuan</div>
          <ul className="list-disc list-inside text-slate-700 text-sm mt-2">
            <li>Pembayaran digital melalui Stripe/Razorpay akan diaktifkan. Saat ini checkout demo tersedia.</li>
            <li>Pesanan Anda tetap tercatat.</li>
            <li>Live chat segera hadir, sementara hubungi WhatsApp pada bagian kontak.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
