'use client';

import { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const cards = [
    { pair: "AUDCAD", esito: "🟢 Debole Bias Long" },
    { pair: "AUDCHF", esito: "🔴 Debole Bias Short" },
    { pair: "AUDJPY", esito: "🔴🔴 Forte Bias Short" },
    { pair: "CHFJPY", esito: "🟢🟢 Forte Bias Long" },
    { pair: "EURJPY", esito: "⚖️ Neutrale" }
  ];

  const filteredCards = cards.filter((item) => {
    const matchesSearch = item.pair.toLowerCase().includes(search.toLowerCase());
    let matchesFilter = true;

    if (filter === "forteRosso") {
      matchesFilter = item.esito.includes("🔴🔴");
    } else if (filter === "forteVerde") {
      matchesFilter = item.esito.includes("🟢🟢");
    } else if (filter === "deboleRosso") {
      matchesFilter = item.esito.includes("🔴") && !item.esito.includes("🔴🔴");
    } else if (filter === "deboleVerde") {
      matchesFilter = item.esito.includes("🟢") && !item.esito.includes("🟢🟢");
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4 space-y-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold text-center">📊 Forex Sentiment Tracker Beta</h1>

      <div className="flex flex-col gap-4">
        <input
          className="text-black p-2"
          placeholder="Cerca coppia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex justify-center gap-2 mt-4">
          <button className="bg-white text-black p-2" onClick={() => setFilter("forteRosso")}>🔴🔴</button>
          <button className="bg-white text-black p-2" onClick={() => setFilter("forteVerde")}>🟢🟢</button>
          <button className="bg-white text-black p-2" onClick={() => setFilter("deboleRosso")}>🔴</button>
          <button className="bg-white text-black p-2" onClick={() => setFilter("deboleVerde")}>🟢</button>
          <button className="bg-white text-black p-2" onClick={() => setFilter("")}>❌ Clear</button>
        </div>
      </div>

      <div className="grid gap-4 mt-6">
        {filteredCards.map((item, idx) => (
          <div key={idx} className="p-4 bg-white text-black rounded-lg shadow-md">
            <div className="font-bold text-lg text-center">{item.pair}</div>
            <div className="text-center mt-2">{item.esito}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
