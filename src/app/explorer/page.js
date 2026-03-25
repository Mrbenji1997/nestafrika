"use client";
import { useState } from "react";

const biens = [
  { id: 1, emoji: "🏠", badge: "Vente", badgeColor: "#c9a84c", prix: "85 000 000 FCFA", titre: "Villa Luxe — Bastos", lieu: "Yaoundé, Bastos", specs: ["🛏 5", "🚿 4", "📐 350m²"], type: "Maison" },
  { id: 2, emoji: "🏢", badge: "Location", badgeColor: "#4aae8c", prix: "180 000 FCFA/mois", titre: "Appartement F4 — Bonanjo", lieu: "Douala, Bonanjo", specs: ["🛏 3", "🚿 2", "📐 120m²"], type: "Appartement" },
  { id: 3, emoji: "🌿", badge: "Terrain", badgeColor: "#4a8cae", prix: "12 000 000 FCFA", titre: "Terrain viabilisé — Odza", lieu: "Yaoundé, Odza", specs: ["📐 800m²", "✅ Viabilisé", "📄 TF"], type: "Terrain" },
  { id: 4, emoji: "🛌", badge: "RBnB", badgeColor: "#e05a3a", prix: "25 000 FCFA/nuit", titre: "Studio Premium — Akwa", lieu: "Douala, Akwa", specs: ["🛏 1", "🚿 1", "📶 WiFi"], type: "RBnB" },
  { id: 5, emoji: "🏡", badge: "Vente", badgeColor: "#c9a84c", prix: "45 000 000 FCFA", titre: "Villa R+1 — Omnisports", lieu: "Yaoundé, Omnisports", specs: ["🛏 4", "🚿 3", "📐 220m²"], type: "Maison" },
  { id: 6, emoji: "🏪", badge: "Location", badgeColor: "#4aae8c", prix: "300 000 FCFA/mois", titre: "Bureaux — Hippodrome", lieu: "Yaoundé, Hippodrome", specs: ["📐 80m²", "🚗 Parking", "🌐 Fibre"], type: "Commercial" },
  { id: 7, emoji: "🏖️", badge: "Vente", badgeColor: "#c9a84c", prix: "120 000 000 FCFA", titre: "Domaine Balnéaire — Kribi", lieu: "Kribi, Bord de mer", specs: ["🛏 5", "📐 600m²", "🌊 Plage"], type: "Maison" },
  { id: 8, emoji: "🌴", badge: "RBnB", badgeColor: "#e05a3a", prix: "18 000 FCFA/nuit", titre: "Bungalow — Limbe Beach", lieu: "Limbe, Down Beach", specs: ["🛏 2", "🚿 1", "🌊 Océan"], type: "RBnB" },
];

const villes = ["Toutes les villes", "Yaoundé", "Douala", "Kribi", "Limbe", "Bafoussam"];
const types = ["Tous les types", "Maison", "Appartement", "Terrain", "RBnB", "Commercial"];
const transactions = ["Tout", "Vente", "Location", "Terrain", "RBnB"];

export default function Explorer() {
  const [recherche, setRecherche] = useState("");
  const [ville, setVille] = useState("Toutes les villes");
  const [type, setType] = useState("Tous les types");
  const [transaction, setTransaction] = useState("Tout");

  const biensFiltres = biens.filter((b) => {
    const matchRecherche = b.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      b.lieu.toLowerCase().includes(recherche.toLowerCase());
    const matchVille = ville === "Toutes les villes" || b.lieu.includes(ville);
    const matchType = type === "Tous les types" || b.type === type;
    const matchTransaction = transaction === "Tout" || b.badge === transaction;
    return matchRecherche && matchVille && matchType && matchTransaction;
  });

  return (
    <main className="min-h-screen" style={{ background: "#0e0d0b" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16"
        style={{ background: "rgba(14,13,11,0.95)", borderBottom: "1px solid #2a2820" }}>
        <a href="/" style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#c9a84c", fontWeight: "bold", textDecoration: "none" }}>
          Nest<span style={{ color: "#f0e8d5" }}>Afrika</span>
        </a>
        <nav className="flex gap-2">
          {[
            { label: "Accueil", href: "/" },
            { label: "Explorer", href: "/explorer" },
            { label: "Agences", href: "/agences" },
            { label: "Publier", href: "/publier" },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ color: item.label === "Explorer" ? "#c9a84c" : "#7a7060", textDecoration: "none" }}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold"
          style={{ background: "#c9a84c", color: "#0e0d0b", border: "none", cursor: "pointer" }}>
          + Publier un bien
        </button>
      </header>

      {/* BARRE DE RECHERCHE */}
      <section className="pt-24 px-16 pb-6" style={{ background: "#161512", borderBottom: "1px solid #2a2820" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#f0e8d5", marginBottom: "16px" }}>
          Explorer les biens
        </h1>

        {/* Recherche */}
        <div className="flex items-center gap-3 rounded-xl px-4 py-2 mb-4"
          style={{ background: "#1e1c18", border: "1px solid #2a2820", maxWidth: "600px" }}>
          <span style={{ opacity: 0.5 }}>🔍</span>
          <input
            className="flex-1 bg-transparent border-none outline-none text-sm"
            style={{ color: "#f0e8d5" }}
            placeholder="Quartier, ville, type de bien..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        {/* Filtres */}
        <div className="flex gap-3 flex-wrap">
          {/* Tabs transaction */}
          <div className="flex gap-1">
            {transactions.map((t) => (
              <button key={t}
                onClick={() => setTransaction(t)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{
                  background: transaction === t ? "#c9a84c" : "none",
                  color: transaction === t ? "#0e0d0b" : "#7a7060",
                  border: transaction === t ? "none" : "1px solid #2a2820",
                  cursor: "pointer"
                }}>
                {t}
              </button>
            ))}
          </div>

          {/* Filtre ville */}
          <select
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            className="px-3 py-1.5 rounded-lg text-xs"
            style={{ background: "#1e1c18", border: "1px solid #2a2820", color: "#7a7060", cursor: "pointer" }}>
            {villes.map((v) => <option key={v}>{v}</option>)}
          </select>

          {/* Filtre type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-1.5 rounded-lg text-xs"
            style={{ background: "#1e1c18", border: "1px solid #2a2820", color: "#7a7060", cursor: "pointer" }}>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm" style={{ color: "#7a7060" }}>
            <span style={{ color: "#c9a84c", fontWeight: "bold" }}>{biensFiltres.length}</span> bien(s) trouvé(s)
          </p>
          <select className="px-3 py-1.5 rounded-lg text-xs"
            style={{ background: "#1e1c18", border: "1px solid #2a2820", color: "#7a7060", cursor: "pointer" }}>
            <option>Récents d'abord</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
          </select>
        </div>

        {biensFiltres.length === 0 ? (
          <div className="text-center py-20">
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
            <p style={{ color: "#7a7060", fontSize: "16px" }}>Aucun bien trouvé avec ces critères</p>
            <button
              onClick={() => { setRecherche(""); setVille("Toutes les villes"); setType("Tous les types"); setTransaction("Tout"); }}
              className="mt-4 px-6 py-2 rounded-lg text-sm"
              style={{ background: "#c9a84c", color: "#0e0d0b", border: "none", cursor: "pointer" }}>
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {biensFiltres.map((bien) => (
              <div key={bien.id}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all"
                style={{ background: "#161512", border: "1px solid #2a2820" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#7a6530"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2820"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div className="flex items-center justify-center text-5xl relative"
                  style={{ height: "160px", background: "linear-gradient(135deg, #1e1c18, #252218)" }}>
                  {bien.emoji}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${bien.badgeColor}22`, color: bien.badgeColor, border: `1px solid ${bien.badgeColor}44` }}>
                    {bien.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#c9a84c", fontWeight: "bold" }}>{bien.prix}</div>
                  <div className="font-semibold mt-1.5 mb-1" style={{ color: "#f0e8d5", fontSize: "13px" }}>{bien.titre}</div>
                  <div className="text-xs mb-3" style={{ color: "#7a7060" }}>📍 {bien.lieu}</div>
                  <div className="flex gap-3 pt-3" style={{ borderTop: "1px solid #2a2820" }}>
                    {bien.specs.map((s) => (
                      <span key={s} className="text-xs" style={{ color: "#7a7060" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="px-16 py-8 mt-8 text-center text-xs"
        style={{ borderTop: "1px solid #2a2820", color: "#7a7060" }}>
        © 2026 NestAfrika · Plateforme Immobilière Digitale · Cameroun
      </footer>

    </main>
  );
}