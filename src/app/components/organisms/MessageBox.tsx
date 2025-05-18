"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function MessageBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Ambil user agent
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";

    // Ambil IP dan lokasi dari API eksternal
    let ip = "";
    let city = "";
    let region = "";
    let country = "";
    try {
      const res = await fetch("https://ipinfo.io/json?token=8b8c3edff88b7f"); // Ganti YOUR_TOKEN dengan token ipinfo.io kamu
      const data = await res.json();
      ip = data.ip || "";
      city = data.city || "";
      region = data.region || "";
      country = data.country || "";
    } catch {
      ip = "unknown";
    }

    const { error } = await supabase.from("messages").insert([
      { name, message, user_agent: userAgent, ip, city, region, country }
    ]);
    setLoading(false);

    if (!error) {
      setSuccess(true);
      setName("");
      setMessage("");
    } else {
      alert("Gagal mengirim pesan: " + error.message);
    }
  };

  return (
    <div id="pesan" className="scroll-mt-20 max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-[#1e2939]">Kirim Pesan untuk SPARTA</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded px-3 py-2 text-[#1e2939]"
          placeholder="Nama (opsional)"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          className="w-full border rounded px-3 py-2 text-[#1e2939]"
          placeholder="Tulis pesanmu untuk Sparta..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="font-bold bg-[#335770] text-white px-4 py-2 rounded hover:bg-[#d2e7f5] hover:text-[#335770] transition"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>
        {success && (
          <div className="text-[#335770] text-sm mt-2">Pesan berhasil dikirim!</div>
        )}
      </form>
    </div>
  );
}