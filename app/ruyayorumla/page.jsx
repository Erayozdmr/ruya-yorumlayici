"use client";
import { useState } from "react";

export default function RuyaYorumla() {
  const [ruya, setRuya] = useState("");
  const [yorum, setYorum] = useState("");
  const [loading, setLoading] = useState(false);

  const handleYorumla = async () => {
    setLoading(true);
    setYorum("");

    try {
      const res = await fetch("/api/ruyayorumla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ruya }),
      });
      const data = await res.json();

      console.log("API'den gelen data:", data);

      if (data && data.yorum) {
        setYorum(data.yorum);
      } else {
        setYorum("Yorum alınamadı.");
      }
    } catch (error) {
      setYorum("Hata: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-12 max-w-5xl mx-auto min-h-[650px] bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#0d1117] rounded-2xl
                shadow-lg flex flex-col gap-8"
    >
      <textarea
        value={ruya}
        onChange={(e) => setRuya(e.target.value)}
        rows={8}
        placeholder="Rüyanı buraya yaz..."
        className="flex-grow resize-none rounded-xl bg-[#121921] border border-[#2e3a59] text-white text-xl
               p-6 placeholder-[#6b7280] font-sans tracking-wide
               focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300
               shadow-md hover:shadow-cyan-600/50"
      />

      <button
        onClick={handleYorumla}
        disabled={loading || !ruya.trim()}
        className="py-5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl text-white font-bold text-2xl uppercase tracking-widest
               shadow-lg hover:shadow-cyan-500/70 active:scale-95 transition-transform duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Yorumlanıyor..." : "Rüyayı Yorumla"}
      </button>

      {yorum && (
        <div
          className="bg-[#121921]/90 border border-cyan-600 rounded-xl p-8 text-white text-lg font-sans leading-relaxed
                    max-h-[320px] overflow-y-auto backdrop-blur-md shadow-lg"
        >
          <strong className="block mb-3 text-cyan-400 text-xl">Yorum:</strong>
          <p>{yorum}</p>
        </div>
      )}
    </div>
  );
}
