import React, { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center overflow-hidden shadow-lg border-2 border-white">
              <img src="/assets/logo.jpg" className="h-full w-full object-cover" alt="A3 Trans" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">A3 <span className="text-blue-600">Trans</span></h1>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 leading-none">Premium Travel</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
            <a href="#armada" className="hover:text-blue-600 transition-colors">Armada</a>
            <a href="#booking" className="hover:text-blue-600 transition-colors">Reservasi</a>
            <a href="#testimoni" className="hover:text-blue-600 transition-colors">Testimoni</a>
            <a href="#kontak" className="hover:text-blue-600 transition-colors">Kontak</a>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}`}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95"
              target="_blank"
            >
              Booking Sekarang
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden md:block"></div>
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Partner Perjalanan Terpercaya
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 mb-6">
                Jelajahi <span className="text-gradient">Jawa & Bali</span> dengan Kenyamanan Ekstra
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                A3 Trans menyediakan layanan sewa Hiace, Medium Bus, dan Big Bus premium untuk berbagai kebutuhan perjalanan Anda. Profesional, aman, dan tepat waktu.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#booking" className="px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all font-bold">
                  Reservasi Sekarang
                </a>
                <a href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.277l-.54 1.969 2.046-.536c.931.518 2.01.792 3.243.793 3.181 0 5.767-2.584 5.768-5.766.001-3.18-2.584-5.766-5.768-5.766zm3.423 8.193c-.142.401-.845.741-1.158.784-.282.039-.638.06-1.025-.066-.241-.078-1.503-.591-2.551-1.528-1.048-.937-1.462-1.611-1.603-1.854-.143-.242-.243-.483-.243-.725 0-.242.128-.456.214-.541.086-.085.185-.128.271-.128.085 0 .171.014.256.014l.156.007c.086.005.171-.005.257.214.128.327.441 1.082.484 1.154.043.071.071.156.014.27-.057.114-.085.185-.171.285-.085.1-.185.228-.257.313-.086.085-.171.185-.071.355.1.171.442.726.954 1.182.655.583 1.21.765 1.381.85.171.085.27.071.37-.043.1-.114.427-.498.541-.669.114-.171.228-.142.384-.085.156.057 1.011.484 1.182.569.171.085.285.128.327.214.043.073.043.412-.099.813zM12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.655 1.446 5.162L2 22l4.991-1.312A9.973 9.973 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                  WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Keamanan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Dukungan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Kota Solo</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Harga Terbaik</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-violet-600 opacity-10 blur-3xl rounded-full"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/assets/Hero.webp" alt="Travel with A3 Trans" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl hidden lg:block max-w-[240px]">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Unit Terawat</div>
                    <div className="text-xs text-slate-500">Kebersihan & keamanan prioritas utama kami.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Armada Section */}
        <section id="armada" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Armada Pilihan Kami</h3>
              <p className="text-slate-600">Kami menyediakan berbagai tipe kendaraan yang siap menemani perjalanan Anda dengan fasilitas terbaik di kelasnya.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {FLEETS.map((f) => (
                <article key={f.id} className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden card-hover">
                  <div className="relative h-64 overflow-hidden bg-slate-50">
                    <img src={f.img} alt={f.title} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-bold text-blue-600">
                      {f.seats}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold">{f.title}</h4>
                      <div className="text-blue-600 font-bold">{f.priceSolo}</div>
                    </div>
                    
                    <ul className="mb-8 space-y-3 flex-grow">
                      {f.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button
                        className="px-4 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
                        onClick={() => {
                          setSelectedFleet(f.id);
                          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Pilih Unit
                      </button>
                      <button
                        className="px-4 py-3 border-2 border-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-all"
                        onClick={() => {
                          const msg = `Halo A3 Trans, saya ingin info ketersediaan untuk unit ${f.title} (${f.seats}). Mohon info.`;
                          openWhatsAppMessage(msg);
                        }}
                      >
                        Info WA
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-white hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Profesional & Terpercaya</h4>
                <p className="text-slate-600 leading-relaxed">Operator berpengalaman dengan unit armada terbaru dan selalu dalam kondisi prima untuk perjalanan Anda.</p>
              </div>
              <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-white hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Reservasi Cepat</h4>
                <p className="text-slate-600 leading-relaxed">Proses booking sangat mudah melalui WhatsApp. Dapatkan konfirmasi ketersediaan unit dalam hitungan menit.</p>
              </div>
              <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-white hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Fleksibel & Nyaman</h4>
                <p className="text-slate-600 leading-relaxed">Melayani berbagai kebutuhan mulai dari wisata keluarga, perjalanan dinas, hingga acara pernikahan di seluruh Jawa & Bali.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Galeri Perjalanan</h3>
              <p className="text-slate-600">Lihat bagaimana armada kami siap melayani setiap momen perjalanan Anda.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 relative group">
                <video src="/assets/video1.mp4" controls className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 relative group">
                <video src="/assets/video2.mp4" controls className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 relative group">
                <video src="/assets/video3.mp4" controls className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Siap Untuk Perjalanan Anda?</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Isi formulir di samping untuk melakukan reservasi. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi dan detail pembayaran.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Lokasi Kami</h5>
                      <p className="text-slate-400">Gebyog, Ngemplak, Kartasura, Jawa Tengah</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Email Support</h5>
                      <p className="text-slate-400">{EMAIL}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 glass-dark rounded-3xl border border-white/10">
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    Catatan Penting
                  </h5>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Harga tercantum adalah harga mulai untuk layanan di dalam <span className="text-white font-semibold">Kota Solo</span> (Include BBM + Driver + Unit). Untuk rute luar kota, silakan hubungi kami untuk mendapatkan penawaran spesial.
                  </p>
                </div>
              </div>

              <div className="glass-dark p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                <form onSubmit={handleBook} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">Pilih Armada</label>
                    <select 
                      value={selectedFleet} 
                      onChange={(e) => setSelectedFleet(e.target.value)} 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                    >
                      {FLEETS.map((f) => (
                        <option value={f.id} key={f.id} className="bg-slate-900">{f.title} — {f.seats}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Nama Lengkap</label>
                      <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder="Contoh: Budi Santoso" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Nomor WhatsApp</label>
                      <input 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="0812xxxx" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Tanggal Sewa</label>
                      <input 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all [color-scheme:dark]" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-300">Kota Tujuan</label>
                      <input 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        required 
                        placeholder="Misal: Solo, Yogyakarta" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">Catatan Tambahan</label>
                    <textarea 
                      value={notes} 
                      onChange={(e) => setNotes(e.target.value)} 
                      placeholder="Rincian rute atau permintaan khusus lainnya..." 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none" 
                    />
                  </div>

                  <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-[0.98]">
                    Konfirmasi via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimoni" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-16">Apa Kata Mereka?</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative p-12 bg-slate-50 rounded-[3rem] overflow-hidden">
                <div className="absolute top-8 left-8 text-slate-200">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12H13.017V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01695 21L5.01695 18C5.01695 16.8954 5.91238 16 7.01695 16H10.017C10.5692 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5692 8 10.017 8H7.01695C6.46467 8 6.01695 8.44772 6.01695 9V12H4.01695V9C4.01695 7.34315 5.3601 6 7.01695 6H10.017C11.6738 6 13.017 7.34315 13.017 9V15C13.017 18.3137 10.3307 21 7.01695 21H5.01695Z"></path></svg>
                </div>
                <div className="relative z-10">
                  <p className="text-2xl italic text-slate-700 mb-8 leading-relaxed">
                    "Perjalanan bersama A3 Trans sangat menyenangkan. Unit Hiace Commuter yang kami sewa sangat bersih, AC dingin, dan fasilitas karaoke bikin perjalanan jauh jadi tidak membosankan. Sopirnya pun sangat profesional dan ramah. Sangat direkomendasikan!"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">P</div>
                    <h5 className="font-bold text-lg">Pilipus</h5>
                    <p className="text-slate-500">Pelanggan Setia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="kontak" className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <h4 className="text-3xl font-bold mb-6">A3 Trans</h4>
                <p className="text-blue-100 mb-8 max-w-md leading-relaxed">
                  Solusi transportasi premium untuk kenyamanan perjalanan Anda di wilayah Jawa dan Bali. Menawarkan unit armada terbaik dengan layanan profesional.
                </p>
                <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg></a>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-xl mb-6">Menu</h5>
                <ul className="space-y-4 text-blue-100">
                  <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                  <li><a href="#armada" className="hover:text-white transition-colors">Armada</a></li>
                  <li><a href="#booking" className="hover:text-white transition-colors">Reservasi</a></li>
                  <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-xl mb-6">Jam Kerja</h5>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex justify-between">
                    <span>Senin - Minggu:</span>
                    <span className="font-semibold text-white">08:00 - 20:00</span>
                  </li>
                  <li className="pt-4 border-t border-white/10">
                    <p className="text-sm">Chat WhatsApp tersedia 24 jam untuk bantuan mendesak.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-blue-100">
          <p>© {new Date().getFullYear()} A3 Trans — Premium Transportation. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-8">
             <span>Melayani Seluruh Jawa & Bali</span>
             <span className="opacity-60">Crafted with Excellence</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for Mobile */}
      <a 
        href={`https://wa.me/${PHONE_WHATSAPP}`} 
        target="_blank" 
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 z-[100] md:hidden"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.277l-.54 1.969 2.046-.536c.931.518 2.01.792 3.243.793 3.181 0 5.767-2.584 5.768-5.766.001-3.18-2.584-5.766-5.768-5.766zm3.423 8.193c-.142.401-.845.741-1.158.784-.282.039-.638.06-1.025-.066-.241-.078-1.503-.591-2.551-1.528-1.048-.937-1.462-1.611-1.603-1.854-.143-.242-.243-.483-.243-.725 0-.242.128-.456.214-.541.086-.085.185-.128.271-.128.085 0 .171.014.256.014l.156.007c.086.005.171-.005.257.214.128.327.441 1.082.484 1.154.043.071.071.156.014.27-.057.114-.085.185-.171.285-.085.1-.185.228-.257.313-.086.085-.171.185-.071.355.1.171.442.726.954 1.182.655.583 1.21.765 1.381.85.171.085.27.071.37-.043.1-.114.427-.498.541-.669.114-.171.228-.142.384-.085.156.057 1.011.484 1.182.569.171.085.285.128.327.214.043.073.043.412-.099.813zM12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.655 1.446 5.162L2 22l4.991-1.312A9.973 9.973 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
      </a>
    </div>
  );
}
