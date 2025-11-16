import { Menu, ShoppingCart, Phone, Instagram, Youtube, Music2 } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#hero", label: "Profil" },
    { href: "#programs", label: "Program" },
    { href: "#media", label: "Media" },
    { href: "#community", label: "Komunitas" },
    { href: "#store", label: "Store" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Music2 className="text-emerald-600" />
          <span className="font-semibold">Bilal Qori</span>
          <span className="hidden sm:inline-block text-slate-500">– Trainer Soulful Qur’an</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-700 hover:text-emerald-600 transition">
              {n.label}
            </a>
          ))}
          <button onClick={onCartOpen} className="relative inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
            <ShoppingCart size={18} />
            Keranjang
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <a href="#contact" className="text-slate-600 hover:text-emerald-600"><Phone /></a>
          <button onClick={() => setOpen((v) => !v)} className="p-2 rounded-md border border-slate-200">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-emerald-600">
                {n.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" className="text-slate-600 hover:text-emerald-600" rel="noreferrer"><Instagram /></a>
              <a href="https://youtube.com" target="_blank" className="text-slate-600 hover:text-emerald-600" rel="noreferrer"><Youtube /></a>
            </div>
            <button onClick={() => { onCartOpen(); setOpen(false); }} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
              <ShoppingCart size={18} />
              Buka Keranjang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
