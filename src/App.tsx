import React, { useState } from "react";

type Fleet = {
  id: string;
  title: string;
  seats: string;
  img: string;
  features: string[];
  priceSolo: string;
};

const PHONE_WHATSAPP = "6282138443128";
const EMAIL = "meygun26@gmail.com";

const FLEETS: Fleet[] = [
  {
    id: "hiace",
    title: "Hiace Commuter",
    seats: "14 seat",
    img: "/assets/hiace.png",
    features: ["Full karaoke", "Seat elegan", "Include BBM + Driver (Kota Solo)"],
    priceSolo: "Rp 1.000.000",
  },
  {
    id: "medium",
    title: "Medium Bus",
    seats: "33-35 seat",
    img: "/assets/medium-buss.webp",
    features: ["Full karaoke", "Include BBM + Driver (Kota Solo)"],
    priceSolo: "Rp 1.300.000",
  },
  {
    id: "big",
    title: "Big Bus",
    img: "/assets/big-buss.webp",
    seats: "50-60 seat",
    features: ["Full karaoke", "Free drink dispenser (kopi)", "Include BBM + Driver"],
    priceSolo: "Rp 1.600.000",
  },
];

export default function App() {
  const [selectedFleet, setSelectedFleet] = useState<string>(FLEETS[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const fleet = FLEETS.find((f) => f.id === selectedFleet)!;

  function openWhatsAppMessage(message: string) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${PHONE_WHATSAPP}?text=${encoded}`;
    window.open(url, "_blank");
  }

  function handleBook(e?: React.FormEvent) {
    e?.preventDefault();
    const baseMsg = `Halo A3 Trans, saya ingin memesan:\n- Unit: ${fleet.title} (${fleet.seats})\n- Nama: ${name || "-"}\n- Nomor: ${phone || "-"}\n- Tanggal: ${date || "-"}\n- Kota tujuan: ${city || "-"}\n- Catatan: ${notes || "-"}`;

    if (city.trim().toLowerCase() === "solo" || city.trim().toLowerCase() === "kota solo") {
      const priceLine = `\nHarga mulai (Kota Solo): ${fleet.priceSolo}`;
      openWhatsAppMessage(baseMsg + priceLine + "\nMohon konfirmasi ketersediaan.");
    } else {
      const outsideMsg = baseMsg + "\nKami mohon info rute & lama sewa untuk mendapatkan penawaran (di luar Kota Solo).";
      openWhatsAppMessage(outsideMsg);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <header className="border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.jpg" className="h-20 w-20" alt="" />
            <div>
              <h1 className="text-xl font-semibold">A3 Trans</h1>
              <p className="text-sm text-slate-500">Sewa Hiace, Medium Bus & Big Bus — Jawa & Bali</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-white items-center">
            <a href="#armada" className="hover:text-blue-700">Armada</a>
            <a href="#booking" className="hover:text-blue-700">Reservasi</a>
            <a href="#testimoni" className="hover:text-blue-700">Testimoni</a>
            <a href="#kontak" className="hover:text-blue-700">Kontak</a>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}`}
              className="ml-2 inline-block px-3 py-2 bg-blue-600   rounded shadow"
              target="_blank"
            >
              <span className="text-slate-50">

                Booking (WhatsApp)
              </span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-white to-sky-50">
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">A3 Trans — Solusi Transportasi Anda</h2>
              <p className="mt-4 text-slate-600">Melayani sewa Hiace, Medium Bus, dan Big Bus untuk wisata, ziarah, dan acara perusahaan. Melayani seluruh Jawa & Bali.</p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>• Harga kompetitif untuk Kota Solo (include BBM + Driver + unit)</li>
                <li>• Full karaoke di semua armada</li>
                <li>• Booking cepat via WhatsApp</li>
                <li>• Profesional untuk kebutuhan B2B, rombongan keluarga, sekolah, dan kampus</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href="#booking" className="px-4 py-2 bg-blue-600 text-white rounded shadow">
                  <span className="text-slate-50">
                    Reservasi Sekarang
                  </span>
                </a>
                <a href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" className="px-4 py-2 border rounded">Chat via WhatsApp</a>
              </div>

              <p className="mt-4 text-xs text-slate-500">Alamat kantor: Gebyog, Ngemplak, Kartasura</p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-lg  rounded-lg overflow-hidden shadow-lg bg-blue-100 flex items-center justify-center">
                <img src="/assets/Hero.webp" alt="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Armada Section */}
        <section id="armada" className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Armada Kami</h3>
          <p className="text-slate-600 mt-2">Pilih armada sesuai kebutuhan rombongan Anda — Harga mulai tercantum untuk Kota Solo.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {FLEETS.map((f) => (
              <article key={f.id} className="border rounded-lg p-4  flex flex-col gap-5 justify-between shadow-sm">
                <img src={f.img} alt="" className="h-60 object-contain" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.seats}</p>
                  </div>
                  <div className="text-blue-700 font-bold">{f.priceSolo}</div>
                </div>

                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                  {f.features.map((feat, i) => (
                    <li key={i}>• {feat}</li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2">
                  <button
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                    onClick={() => setSelectedFleet(f.id)}
                  >
                    Pilih
                  </button>
                  <button
                    className="px-3 py-2 border text-white rounded"
                    onClick={() => {
                      const msg = `Halo A3 Trans, saya ingin info ketersediaan untuk unit ${f.title} (${f.seats}). Mohon info.`;
                      openWhatsAppMessage(msg);
                    }}
                  >
                    Tanyakan via WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why choose us / trust */}
        <section className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Kenapa Memilih A3 Trans?</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Profesional & Terpercaya</h4>
              <p className="text-sm text-slate-600 mt-2">Operator berpengalaman, sopir berlisensi, dan unit terawat.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Mudah & Cepat</h4>
              <p className="text-sm text-slate-600 mt-2">Proses reservasi praktis via WhatsApp dan konfirmasi cepat.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Fleksibel untuk Berbagai Kebutuhan</h4>
              <p className="text-sm text-slate-600 mt-2">Cocok untuk wisata, ziarah, acara perusahaan, sekolah, dan kampus.</p>
            </div>
          </div>
        </section>

        <div className="mt-4 px-6">
          <div className="mt-2 grid md:grid-cols-2   gap-3">
            <video src="/assets/video1.mp4" controls className="w-full h-96 rounded bg-black" />
            <video src="/assets/video2.mp4" controls className="w-full h-96 rounded bg-black" />
          </div>
        </div>


        {/* Booking Section */}
        <section id="booking" className="bg-slate-50 py-12">
          <div className="container mx-auto px-6 md:flex gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold">Form Reservasi / Booking (via WhatsApp)</h3>
              <p className="text-slate-600 mt-2">Isi form berikut dan klik "Book via WhatsApp" untuk mengirim permintaan reservasi. Jika tujuan Anda di luar Kota Solo, kami akan menyiapkan penawaran khusus melalui chat.</p>

              <form onSubmit={handleBook} className="mt-6 space-y-3">
                <div>
                  <label className="block text-sm font-medium">Pilih Armada</label>
                  <select value={selectedFleet} onChange={(e) => setSelectedFleet(e.target.value)} required className="mt-1 block w-full rounded border px-3 py-2">
                    {FLEETS.map((f) => (
                      <option value={f.id} key={f.id}>{f.title} — {f.seats}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nama pemesan" className="rounded border px-3 py-2" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nomor telepon (WhatsApp)" className="rounded border px-3 py-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input value={date} onChange={(e) => setDate(e.target.value)} required type="date" className="rounded max-md:w-full border px-3 py-2" />
                  <input value={city} onChange={(e) => setCity(e.target.value)} required placeholder="Kota tujuan (misal: Solo)" className="rounded border px-3 py-2" />
                </div>

                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Catatan tambahan / rute" className="w-full rounded border px-3 py-2 h-24" />

                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Book via WhatsApp</button>
                  <button
                    type="button"
                    onClick={() => {
                      const quick = `Halo, saya ingin cek ketersediaan unit ${fleet.title} untuk tanggal ${date || "-"} di ${city || "-"}. Mohon info.`;
                      openWhatsAppMessage(quick);
                    }}
                    className="px-4 py-2 border rounded text-white"
                  >
                    Chat Cepat
                  </button>
                </div>
              </form>

              <div className="mt-6 p-4 bg-white border rounded">
                <h4 className="font-semibold">Catatan Harga</h4>
                <p className="text-sm text-slate-600">Harga yang tertera adalah mulai harga untuk layanan di dalam Kota Solo (Include BBM + Driver + unit). Untuk luar Solo, hubungi WhatsApp untuk penawaran dan rincian biaya tambahan.</p>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <h4 className="font-semibold">Ringkasan Pilihan</h4>
              <div className="mt-3 border rounded p-4 bg-white">
                <h5 className="font-bold">{fleet.title}</h5>
                <p className="text-sm text-slate-600">{fleet.seats} • {fleet.features.join(' • ')}</p>
                <p className="mt-2 text-blue-700 font-bold">{fleet.priceSolo} (Kota Solo)</p>

                <div className="mt-4">
                  <p className="text-sm text-slate-600">Untuk konfirmasi cepat, klik tombol "Book via WhatsApp" di form.</p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold">Testimoni Klien</h5>
                <div className="mt-3 border rounded overflow-hidden">

                  <div className="p-3">
                    <p className="text-sm">"Perjalanan nyaman dan sopir ramah. Recommended!"</p>
                    <p className="text-xs text-slate-500 mt-2">Pilipus</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>


        {/* Contact */}
        <section id="kontak" className="bg-sky-50 py-10">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-bold">Kontak & Sosial Media</h4>
              <ul className="mt-3 text-sm text-slate-700 space-y-1">
                <li>WhatsApp: <a className="text-blue-700 font-medium" href={`https://wa.me/${PHONE_WHATSAPP}`}>0821-3844-3128</a></li>
                <li>Email: <a href={`mailto:${EMAIL}`} className="text-blue-700">{EMAIL}</a></li>
                <li>Instagram: <span className="font-medium">@SewaHiace07</span></li>
                <li>Facebook: <span className="font-medium">Transportasi Indonesia</span></li>
                <li>TikTok: <span className="font-medium">Meygun</span></li>
                <li>Alamat: Gebyog, Ngemplak, Kartasura</li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h5 className="font-semibold">Jam Operasional</h5>
              <p className="text-sm text-slate-700 mt-2">Senin - Minggu: 08:00 - 20:00 (Chat WhatsApp kapan saja)</p>

              <div className="mt-4">
                <a href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" className="inline-block px-4 py-2 bg-blue-600  rounded">
                  <span className="text-white">
                    Chat Sekarang
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} A3 Trans — Semua hak cipta dilindungi.</p>
          <div className="text-sm text-slate-600">Melayani: Seluruh Jawa & Bali</div>
        </div>
      </footer>
    </div>
  );
}
