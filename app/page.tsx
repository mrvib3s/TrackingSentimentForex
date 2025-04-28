'use client';
import { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const cards = [
        { pair: "AUDCAD", esito: "🟢 Debole Bias Long", long: "65%", short: "35%", prezzoMedio: "0.91", conclusione: "Acquisto consigliato" },
    { pair: "AUDCHF", esito: "🔴 Debole Bias Short", long: "30%", short: "70%", prezzoMedio: "0.65", conclusione: "Vendita consigliata" },
    { pair: "AUDJPY", esito: "🔴🔴 Forte Bias Short", long: "20%", short: "80%", prezzoMedio: "84.72", conclusione: "Vendita consigliata" },
    { pair: "AUDNZD", esito: "🔴🔴 Forte Bias Short", long: "25%", short: "75%", prezzoMedio: "1.09", conclusione: "Vendita consigliata" },
    { pair: "AUDUSD", esito: "🔴 Debole Bias Short", long: "35%", short: "65%", prezzoMedio: "0.68", conclusione: "Vendita consigliata" },
    { pair: "CADCHF", esito: "🔴🔴 Forte Bias Short", long: "20%", short: "80%", prezzoMedio: "0.70", conclusione: "Vendita consigliata" },
    { pair: "CADJPY", esito: "🔴🔴 Forte Bias Short", long: "30%", short: "70%", prezzoMedio: "91.57", conclusione: "Vendita consigliata" },
    { pair: "CHFJPY", esito: "🟢🟢 Forte Bias Long", long: "80%", short: "20%", prezzoMedio: "151.25", conclusione: "Acquisto consigliato" },
    { pair: "EURAUD", esito: "🟢🟢 Forte Bias Long", long: "75%", short: "25%", prezzoMedio: "1.56", conclusione: "Acquisto consigliato" },
    { pair: "EURCAD", esito: "🟢 Debole Bias Long", long: "60%", short: "40%", prezzoMedio: "1.45", conclusione: "Acquisto consigliato" },    
    { pair: "EURCHF", esito: "🟢 Debole Bias Long", long: "65%", short: "35%", prezzoMedio: "0.95", conclusione: "Acquisto consigliato" },
    { pair: "EURGBP", esito: "🟢 Debole Bias Long", long: "55%", short: "45%", prezzoMedio: "0.87", conclusione: "Acquisto consigliato" },
    { pair: "EURJPY", esito: "⚖️ Neutrale", long: "50%", short: "50%", prezzoMedio: "133.56", conclusione: "Osservare" },
    { pair: "EURNZD", esito: "🟢🟢 Forte Bias Long", long: "85%", short: "15%", prezzoMedio: "1.72", conclusione: "Acquisto consigliato" },
    { pair: "EURUSD", esito: "🟢 Debole Bias Long", long: "70%", short: "30%", prezzoMedio: "1.12", conclusione: "Acquisto consigliato" },
    { pair: "GBPAUD", esito: "🟢🟢 Forte Bias Long", long: "80%", short: "20%", prezzoMedio: "1.85", conclusione: "Acquisto consigliato" },
    { pair: "GBPCAD", esito: "🟢🟢 Forte Bias Long", long: "75%", short: "25%", prezzoMedio: "1.75", conclusione: "Acquisto consigliato" },
    { pair: "GBPCHF", esito: "🟢 Debole Bias Long", long: "60%", short: "40%", prezzoMedio: "1.22", conclusione: "Acquisto consigliato" },
    { pair: "GBPJPY", esito: "🔴 Debole Bias Short", long: "30%", short: "70%", prezzoMedio: "151.10", conclusione: "Vendita consigliata" },
    { pair: "GBPNZD", esito: "🟢🟢 Forte Bias Long", long: "85%", short: "15%", prezzoMedio: "2.05", conclusione: "Acquisto consigliato" },
    { pair: "GBPUSD", esito: "🟢 Debole Bias Long", long: "65%", short: "35%", prezzoMedio: "1.35", conclusione: "Acquisto consigliato" },
    { pair: "NZDCAD", esito: "🟢🟢 Forte Bias Long", long: "80%", short: "20%", prezzoMedio: "0.87", conclusione: "Acquisto consigliato" },
    { pair: "NZDCHF", esito: "⚖️ Neutrale", long: "50%", short: "50%", prezzoMedio: "0.62", conclusione: "Osservare" },
    { pair: "NZDJPY", esito: "⚖️ Neutrale", long: "55%", short: "45%", prezzoMedio: "87.25", conclusione: "Osservare" },
    { pair: "NZDUSD", esito: "🔴🔴 Forte Bias Short", long: "25%", short: "75%", prezzoMedio: "0.61", conclusione: "Vendita consigliata" },
    { pair: "USDCAD", esito: "🟢 Debole Bias Long", long: "70%", short: "30%", prezzoMedio: "1.35", conclusione: "Acquisto consigliato" },
    { pair: "USDCHF", esito: "🔴🔴 Forte Bias Short", long: "20%", short: "80%", prezzoMedio: "0.91", conclusione: "Vendita consigliata" },
    { pair: "USDJPY", esito: "🔴🔴 Forte Bias Short", long: "25%", short: "75%", prezzoMedio: "134.00", conclusione: "Vendita consigliata" },
    { pair: "XAGUSD", esito: "🔴 Debole Bias Short", long: "30%", short: "70%", prezzoMedio: "24.90", conclusione: "Vendita consigliata" },
    { pair: "XAUUSD", esito: "🔴 Debole Bias Short", long: "35%", short: "65%", prezzoMedio: "1825.50", conclusione: "Vendita consigliata" }
  ];
  const filteredCards = cards.filter((item) => {
    const matchesSearch = item.pair.toLowerCase().includes(search.toLowerCase());
    let matchesFilter = true;

    if (filter === "forteRosso") {
      matchesFilter = item.esito.includes("🔴🔴");
    } else if (filter === "forteVerde") {
      matchesFilter = item.esito.includes("🟢🟢");
    } else if (filter === "deboleRosso") {
      matchesFilter = item.esito.includes("🔴"));
    } else if (filter === "deboleVerde") {
      matchesFilter = item.esito.includes("🟢");
    }

    return matchesSearch && matchesFilter;
  });

  const getCardColor = (esito) => {
    if (esito.includes("🔴🔴")) return "bg-red-600";
    if (esito.includes("🟢🟢")) return "bg-green-600";
    if (esito.includes("🔴")) return "bg-orange-400";
    if (esito.includes("🟢")) return "bg-yellow-400";
    return "bg-white";
  };
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
          <div key={idx} className={`p-4 rounded-lg shadow-md text-black ${getCardColor(item.esito)}`}>
            <div className="font-bold text-lg text-center">{item.pair}</div>
            <div className="text-center mt-2">{item.esito}</div>
            <div className="text-center mt-2">Long: {item.long}</div>
            <div className="text-center mt-2">Short: {item.short}</div>
            <div className="text-center mt-2">Prezzo Medio: {item.prezzoMedio}</div>
            <div className="text-center mt-2">Conclusione: {item.conclusione}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
