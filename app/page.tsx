import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
export default function Page() { 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const correctUsername = "admin";
  const correctPassword = "sentiment2025";
  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setLoggedIn(true);
      toast.success("Accesso effettuato");
       } else {
      toast.error("Credenziali errate");
    }
  };
const getCardColor = (esito) => {
    if (esito.includes("🔴🔴")) return "bg-red-500 border-white border-2";
    if (esito.includes("🟢🟢")) return "bg-green-500 border-white border-2";
    if (esito.includes("🔴")) return "bg-orange-400 border-white border-2";
    if (esito.includes("🟢")) return "bg-yellow-300 border-white border-2";
    return "bg-white border-white border-2";
  };
const cards = [ 
      {
      pair: "AUDCAD",
      date: "2025-04-26",
      long: 44,
      short: 56,
      prezzoMedio: "0.8861",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {pair: "AUDCHF",
      date: "2025-04-26",
      long: 64,
      short: 36,
      prezzoMedio: "0.5830",
      esito: "🔴 Debole Bias Short (Retail Long)",
      conclusione: "⚠️ Possible Short"
    },
     {pair: "AUDJPY",
      date: "2025-04-26",
      long: 74,
      short: 26,
      prezzoMedio: "90.85",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
     {pair: "AUDNZD",
      date: "2025-04-26",
      long: 87,
      short: 13,
      prezzoMedio: "1.0729",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
       {pair: "AUDUSD",
      date: "2025-04-26",
      long: 58,
      short: 42,
      prezzoMedio: "0.6174",
      esito: "🔴 Debole Bias Short (Retail Long)",
      conclusione: "⚠️ Possible Short"
    }, 
    {pair: "CADCHF",
      date: "2025-04-26",
      long: 79,
      short: 21,
      prezzoMedio: "0.6445",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
        {pair: "CADJPY",
      date: "2025-04-26",
      long: 77,
      short: 23,
      prezzoMedio: "103.73",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
      {
      pair: "CHFJPY",
      date: "2025-04-26",
      long: 27,
      short: 73,
      prezzoMedio: "2.0809",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
     {
      pair: "EURAUD",
      date: "2025-04-26",
      long: 20,
      short: 80,
      prezzoMedio: "1.6720",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "EURCAD",
      date: "2025-04-26",
      long: 40,
      short: 60,
      prezzoMedio: "1.5741",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "EURCHF",
      date: "2025-04-26",
      long: 35,
      short: 65,
      prezzoMedio: "0.9430",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "EURGBP",
      date: "2025-04-26",
      long: 40,
      short: 60,
      prezzoMedio: "0.8755",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "EURJPY",
      date: "2025-04-26",
      long: 46,
      short: 54,
      prezzoMedio: "165.80",
      esito: "⚖️ Neutrale",
      conclusione: ""
    },
    {
      pair: "EURNZD",
      date: "2025-04-26",
      long: 20,
      short: 80,
      prezzoMedio: "1.8995",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "EURUSD",
      date: "2025-04-26",
      long: 38,
      short: 62,
      prezzoMedio: "1.0912",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "GBPAUD",
      date: "2025-04-26",
      long: 15,
      short: 85,
      prezzoMedio: "2.0809",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "GBPCAD",
      date: "2025-04-26",
      long: 30,
      short: 70,
      prezzoMedio: "1.6950",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "GBPCHF",
      date: "2025-04-26",
      long: 40,
      short: 60,
      prezzoMedio: "1.1100",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "GBPJPY",
      date: "2025-04-26",
      long: 63,
      short: 37,
      prezzoMedio: "189.30",
      esito: "🔴 Debole Bias Short (Retail Long)",
      conclusione: "⚠️ Possible Short"
    },
    {
      pair: "GBPNZD",
      date: "2025-04-26",
      long: 18,
      short: 82,
      prezzoMedio: "2.1700",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "GBPUSD",
      date: "2025-04-26",
      long: 40,
      short: 60,
      prezzoMedio: "1.2460",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "NZDCAD",
      date: "2025-04-26",
      long: 22,
      short: 78,
      prezzoMedio: "0.8450",
      esito: "🟢🟢 Forte Bias Long (Retail Short)",
      conclusione: "✅ Long"
    },
    {
      pair: "NZDCHF",
      date: "2025-04-26",
      long: 50,
      short: 50,
      prezzoMedio: "0.5500",
      esito: "⚖️ Neutrale",
      conclusione: ""
    },
    {
      pair: "NZDJPY",
      date: "2025-04-26",
      long: 55,
      short: 45,
      prezzoMedio: "92.00",
      esito: "⚖️ Neutrale",
      conclusione: ""
    },
    {
      pair: "NZDUSD",
      date: "2025-04-26",
      long: 71,
      short: 29,
      prezzoMedio: "0.5920",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
    {
      pair: "USDCAD",
      date: "2025-04-26",
      long: 38,
      short: 62,
      prezzoMedio: "1.3620",
      esito: "🟢 Debole Bias Long (Retail Short)",
      conclusione: "✅ Possible Long"
    },
    {
      pair: "USDCHF",
      date: "2025-04-26",
      long: 82,
      short: 18,
      prezzoMedio: "0.8865",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
    {
      pair: "USDJPY",
      date: "2025-04-26",
      long: 71,
      short: 29,
      prezzoMedio: "151.85",
      esito: "🔴🔴 Forte Bias Short (Retail Long)",
      conclusione: "⚠️ Short"
    },
    {
      pair: "XAGUSD",
      date: "2025-04-26",
      long: 60,
      short: 40,
      prezzoMedio: "25.00",
      esito: "🔴 Debole Bias Short (Retail Long)",
      conclusione: "⚠️ Possible Short"
    },
    {
      pair: "XAUUSD",
      date: "2025-04-26",
      long: 66,
      short: 34,
      prezzoMedio: "3341.00",
      esito: "🔴 Debole Bias Short (Retail Long)",
      conclusione: "⚠️ Possible Short"
    }
  ];

  const filteredSearch = cards.filter((item) => {
    const matchesSearch = item.pair.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === ""
        || (filter === "rosso" && item.esito.includes("🔴🔴"))
        || (filter === "verde" && item.esito.includes("🟢🟢"))
        || (filter === "arancio" && item.esito.includes("🔴"))
        || (filter === "giallo" && item.esito.includes("🟢"));
    return matchesSearch && matchesFilter;
  });

  if (!loggedIn) {
    return (
      <div className="p-6 max-w-sm mx-auto space-y-4 bg-black min-h-screen">
        <h2 className="text-xl font-bold text-white">🔐 Accesso Privato</h2>
        <Input className="text-black" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input className="text-black" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Entra</Button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-white text-center">📊 Forex Sentiment Tracker</h1>

      <div className="flex flex-col gap-4">
        <Input
          className="text-black"
          placeholder="Cerca coppia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex justify-center gap-2">
          <Button className="bg-white border-2 border-yellow-400" onClick={() => setFilter(filter === "rosso" ? "" : "rosso")}>
            🔴🔴
          </Button>
          <Button className="bg-white border-2 border-yellow-400" onClick={() => setFilter(filter === "verde" ? "" : "verde")}>
            🟢🟢
          </Button>
          <Button className="bg-white border-2 border-yellow-400" onClick={() => setFilter(filter === "arancio" ? "" : "arancio")}>
            🔴
          </Button>
          <Button className="bg-white border-2 border-yellow-400" onClick={() => setFilter(filter === "giallo" ? "" : "giallo")}>
            🟢
          </Button>
        </div>
      </div>

      <div className="grid gap-4 mt-4">
        {filteredSearch.map((item, idx) => (
          <Card
            key={idx}
            className={`p-4 shadow-md rounded-2xl text-white ${getCardColor(item.esito)}`}
          >
            <CardContent className="space-y-2">
              <div className="text-lg font-bold text-center">{item.pair}</div>
              <div className="text-sm">📅 {item.date}</div>
              <div className="text-sm">🎯 Prezzo Medio: {item.prezzoMedio}</div>
              <div className="text-sm">📈 Long: {item.long}%</div>
              <div className="text-sm">📉 Short: {item.short}%</div>
              <div className="text-sm text-white font-bold">{item.esito}</div>
              <div className="text-sm">{item.conclusione}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
