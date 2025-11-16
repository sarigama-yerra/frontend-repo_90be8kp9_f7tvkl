import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async () => {
    setStatus("");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Gagal mengirim");
      setStatus("Terkirim. Kami akan menghubungi Anda melalui email/WhatsApp.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (e) {
      setStatus("Terjadi kesalahan. Coba lagi nanti.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kontak</h2>
        <p className="text-slate-600 mt-2">WhatsApp, email, dan media sosial.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg border">
            <input className="border rounded-md px-3 py-2 w-full" placeholder="Nama" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
            <input className="border rounded-md px-3 py-2 w-full mt-3" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
            <input className="border rounded-md px-3 py-2 w-full mt-3" placeholder="No. WhatsApp" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
            <textarea className="border rounded-md px-3 py-2 w-full mt-3" rows={4} placeholder="Pesan" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} />
            <button onClick={submit} className="mt-4 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Kirim Pesan</button>
            {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <div className="font-semibold">Hubungi</div>
            <div className="text-slate-700 mt-2">WhatsApp: <a href="https://wa.me/6281234567890" className="text-emerald-700">+62 812-3456-7890</a></div>
            <div className="text-slate-700">Email: <a href="mailto:hello@soulfulquran.id" className="text-emerald-700">hello@soulfulquran.id</a></div>
            <div className="text-slate-700 mt-2">Instagram, TikTok, YouTube: @bilalqori</div>
          </div>
        </div>
      </div>
    </section>
  );
}
