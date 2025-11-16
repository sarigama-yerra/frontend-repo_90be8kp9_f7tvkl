import { useState } from "react";

const programs = [
  { title: "Kelas Tilawah", desc: "Belajar maqomat & penghayatan", program: "tilawah" },
  { title: "Workshop", desc: "Praktik intensif bersama Bilal", program: "workshop" },
  { title: "Webinar", desc: "Belajar dari mana saja", program: "webinar" },
];

export default function Programs({ onEnroll }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "tilawah", schedule: "", notes: "" });

  return (
    <section id="programs" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Program & Kelas</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {programs.map((p) => (
            <div key={p.program} className="p-5 bg-white rounded-lg border border-emerald-100">
              <div className="font-semibold">{p.title}</div>
              <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              <button onClick={() => setForm((f) => ({ ...f, program: p.program }))} className="mt-3 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Pilih {p.title}</button>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-lg border border-emerald-100">
          <h3 className="text-xl font-semibold">Form Pendaftaran</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input className="border rounded-md px-3 py-2" placeholder="Nama" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
            <input className="border rounded-md px-3 py-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
            <input className="border rounded-md px-3 py-2" placeholder="No. WhatsApp" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
            <input className="border rounded-md px-3 py-2" placeholder="Jadwal (opsional)" value={form.schedule} onChange={(e)=>setForm({...form,schedule:e.target.value})} />
            <select className="border rounded-md px-3 py-2" value={form.program} onChange={(e)=>setForm({...form,program:e.target.value})}>
              <option value="tilawah">Kelas Tilawah</option>
              <option value="workshop">Workshop</option>
              <option value="webinar">Webinar</option>
              <option value="membership">Membership</option>
            </select>
            <input className="border rounded-md px-3 py-2 md:col-span-2" placeholder="Catatan" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} />
          </div>
          <button onClick={() => onEnroll(form)} className="mt-4 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Daftar Sekarang</button>
        </div>
      </div>
    </section>
  );
}
