export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Bilal Qori – <span className="text-emerald-700">Trainer Soulful Qur’an</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Membangun Jiwa melalui Irama dan Makna Al-Qur’an
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#programs" className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Ikuti Kelas</a>
            <a href="#store" className="px-5 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700">Belanja Produk</a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" alt="Bilal Qori" className="w-72 h-72 object-cover rounded-2xl shadow-xl ring-4 ring-white"/>
        </div>
      </div>
    </section>
  );
}
