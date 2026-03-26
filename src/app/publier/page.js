"use client";
import { useState } from "react";

const etapes = ["Type", "Infos", "Photos", "Prix", "Publication"];

export default function Publier() {
  const [etape, setEtape] = useState(1);
  const [transaction, setTransaction] = useState("Vendre");
  const [typeBien, setTypeBien] = useState("Villa / Maison");
  const [form, setForm] = useState({
    titre: "", ville: "Yaoundé", quartier: "", surface: "",
    terrain: "", chambres: "Studio", salles: "1", description: "",
    equipements: [], prix: "", typePrix: "Prix fixe", telephone: "",
    whatsapp: "Oui", documents: [],
  });

  const transactions = [
    { label: "🏷️ Vendre", val: "Vendre" },
    { label: "🔑 Louer", val: "Louer" },
    { label: "🛌 Louer en RBnB", val: "RBnB" },
  ];

  const typesBien = [
    { label: "🏠 Villa / Maison", val: "Villa / Maison" },
    { label: "🏢 Appartement", val: "Appartement" },
    { label: "🌿 Terrain", val: "Terrain" },
    { label: "🏪 Local commercial", val: "Local commercial" },
    { label: "🏗️ Immeuble", val: "Immeuble" },
  ];

  const equipementsList = [
    "🏊 Piscine", "🔒 Sécurisé 24h", "🚗 Parking",
    "🌿 Jardin", "⚡ Électricité stable", "💧 Eau courante",
    "🛗 Ascenseur", "📶 Fibre optique", "🌡️ Climatisation", "🏠 Meublé",
  ];

  const documentsList = [
    "📄 Titre Foncier", "📋 PV de bornage",
    "🏗️ Permis de construire", "📝 Contrat bail",
  ];

  const toggleItem = (key, val) => {
    setForm(f => ({
      ...f,
      [key]: f[key].includes(val)
        ? f[key].filter(i => i !== val)
        : [...f[key], val],
    }));
  };

  const inputStyle = {
    width: "100%", background: "#1e1c18",
    border: "1px solid #2a2820", borderRadius: "9px",
    padding: "11px 14px", color: "#f0e8d5",
    fontFamily: "inherit", fontSize: "13px", outline: "none",
  };

  const labelStyle = {
    fontSize: "11px", color: "#7a7060",
    fontWeight: "600", textTransform: "uppercase",
    letterSpacing: "0.4px", marginBottom: "6px", display: "block",
  };

  const sectionStyle = {
    background: "#161512", border: "1px solid #2a2820",
    borderRadius: "16px", padding: "24px", marginBottom: "16px",
  };

  const btnTypeStyle = (active) => ({
    padding: "8px 16px", borderRadius: "8px", cursor: "pointer",
    fontSize: "13px", fontWeight: "600", transition: "all 0.2s",
    background: active ? "rgba(201,168,76,0.15)" : "none",
    border: active ? "1px solid #c9a84c" : "1px solid #2a2820",
    color: active ? "#c9a84c" : "#7a7060",
  });

  return (
    <main className="min-h-screen pb-20" style={{ background: "#0e0d0b" }}>

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
              style={{ color: item.label === "Publier" ? "#c9a84c" : "#7a7060", textDecoration: "none" }}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ background: "none", border: "1px solid #2a2820", color: "#d4c9b0", cursor: "pointer" }}>
            Connexion
          </button>
        </div>
      </header>

      <div className="pt-24 px-16" style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#f0e8d5", fontWeight: "bold", marginBottom: "8px" }}>
          Publier un bien
        </h1>
        <p style={{ color: "#7a7060", fontSize: "14px", marginBottom: "32px" }}>
          Mettez votre propriété en avant auprès de milliers d'acheteurs et locataires potentiels.
        </p>

        {/* ÉTAPES */}
        <div className="flex items-center gap-0 mb-8">
          {etapes.map((e, i) => (
            <div key={e} className="flex items-center" style={{ flex: 1 }}>
              <div className="flex items-center gap-2">
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: "700", flexShrink: 0,
                  background: i + 1 < etape ? "#4aae8c" : i + 1 === etape ? "#c9a84c" : "none",
                  border: i + 1 < etape ? "none" : i + 1 === etape ? "none" : "2px solid #2a2820",
                  color: i + 1 <= etape ? "#0e0d0b" : "#7a7060",
                }}>
                  {i + 1 < etape ? "✓" : i + 1}
                </div>
                <span style={{ fontSize: "11px", color: i + 1 === etape ? "#c9a84c" : "#7a7060", fontWeight: i + 1 === etape ? "600" : "400" }}>
                  {e}
                </span>
              </div>
              {i < etapes.length - 1 && (
                <div style={{ flex: 1, height: "1px", background: "#2a2820", margin: "0 8px" }}></div>
              )}
            </div>
          ))}
        </div>

        {/* ÉTAPE 1 — TYPE */}
        <div style={sectionStyle}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", color: "#0e0d0b" }}>1</div>
            <span style={{ fontSize: "15px", color: "#f0e8d5", fontWeight: "600" }}>Type de transaction et de bien</span>
          </div>
          <label style={labelStyle}>Je souhaite</label>
          <div className="flex gap-2 mb-5 flex-wrap">
            {transactions.map(t => (
              <button key={t.val} onClick={() => setTransaction(t.val)} style={btnTypeStyle(transaction === t.val)}>
                {t.label}
              </button>
            ))}
          </div>
          <label style={labelStyle}>Type de bien</label>
          <div className="flex gap-2 flex-wrap">
            {typesBien.map(t => (
              <button key={t.val} onClick={() => setTypeBien(t.val)} style={btnTypeStyle(typeBien === t.val)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ÉTAPE 2 — INFOS */}
        <div style={sectionStyle}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", color: "#0e0d0b" }}>2</div>
            <span style={{ fontSize: "15px", color: "#f0e8d5", fontWeight: "600" }}>Informations principales</span>
          </div>
          <div className="mb-4">
            <label style={labelStyle}>Titre de l'annonce</label>
            <input style={inputStyle} placeholder="Ex: Belle villa 5 chambres à Bastos avec piscine"
              value={form.titre} onChange={e => setForm(f => ({ ...f, titre: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={labelStyle}>Ville</label>
              <select style={inputStyle} value={form.ville} onChange={e => setForm(f => ({ ...f, ville: e.target.value }))}>
                {["Yaoundé", "Douala", "Bafoussam", "Kribi", "Limbe", "Autre"].map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Quartier</label>
              <input style={inputStyle} placeholder="Ex: Bastos, Bonanjo, Odza..."
                value={form.quartier} onChange={e => setForm(f => ({ ...f, quartier: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={labelStyle}>Surface (m²)</label>
              <input style={inputStyle} type="number" placeholder="Ex: 250"
                value={form.surface} onChange={e => setForm(f => ({ ...f, surface: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Superficie terrain (m²)</label>
              <input style={inputStyle} type="number" placeholder="Ex: 500"
                value={form.terrain} onChange={e => setForm(f => ({ ...f, terrain: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={labelStyle}>Nbre de chambres</label>
              <select style={inputStyle} value={form.chambres} onChange={e => setForm(f => ({ ...f, chambres: e.target.value }))}>
                {["Studio", "1", "2", "3", "4", "5+"].map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Salles de bain</label>
              <select style={inputStyle} value={form.salles} onChange={e => setForm(f => ({ ...f, salles: e.target.value }))}>
                {["1", "2", "3", "4+"].map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label style={labelStyle}>Description détaillée</label>
            <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
              placeholder="Décrivez votre bien en détail..."
              value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          </div>
          <div>
            <label style={labelStyle}>Équipements & commodités</label>
            <div className="flex gap-2 flex-wrap mt-2">
              {equipementsList.map(eq => (
                <button key={eq} onClick={() => toggleItem("equipements", eq)}
                  style={btnTypeStyle(form.equipements.includes(eq))}>
                  {eq}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ÉTAPE 3 — PHOTOS */}
        <div style={sectionStyle}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", color: "#0e0d0b" }}>3</div>
            <span style={{ fontSize: "15px", color: "#f0e8d5", fontWeight: "600" }}>Photos & Vidéo</span>
          </div>
          <div className="flex items-center justify-center flex-col"
            style={{ border: "2px dashed #2a2820", borderRadius: "12px", padding: "40px", cursor: "pointer", marginBottom: "16px" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#7a6530"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2820"}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📸</div>
            <p style={{ color: "#f0e8d5", fontWeight: "600", fontSize: "14px" }}>Glissez vos photos ici</p>
            <p style={{ color: "#7a7060", fontSize: "12px", marginTop: "4px" }}>JPG, PNG — 15 photos max · 5 Mo par fichier</p>
          </div>
          <div>
            <label style={labelStyle}>Lien vidéo YouTube (optionnel)</label>
            <input style={inputStyle} placeholder="https://youtube.com/watch?v=..." />
          </div>
        </div>

        {/* ÉTAPE 4 — PRIX */}
        <div style={sectionStyle}>
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", color: "#0e0d0b" }}>4</div>
            <span style={{ fontSize: "15px", color: "#f0e8d5", fontWeight: "600" }}>Prix & Contact</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={labelStyle}>Prix (FCFA)</label>
              <input style={inputStyle} type="number" placeholder="Ex: 85000000"
                value={form.prix} onChange={e => setForm(f => ({ ...f, prix: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Type de prix</label>
              <select style={inputStyle} value={form.typePrix} onChange={e => setForm(f => ({ ...f, typePrix: e.target.value }))}>
                {["Prix fixe", "Prix négociable", "À discuter"].map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={labelStyle}>Votre téléphone</label>
              <input style={inputStyle} placeholder="+237 6XX XXX XXX"
                value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp disponible</label>
              <select style={inputStyle} value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}>
                <option>✅ Oui</option>
                <option>❌ Non</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Documents disponibles</label>
            <div className="flex gap-2 flex-wrap mt-2">
              {documentsList.map(doc => (
                <button key={doc} onClick={() => toggleItem("documents", doc)}
                  style={btnTypeStyle(form.documents.includes(doc))}>
                  {doc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOUTONS */}
        <div className="flex gap-3 justify-end mt-6">
          <button style={{ padding: "12px 24px", borderRadius: "9px", background: "none", border: "1px solid #2a2820", color: "#d4c9b0", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}>
            Sauvegarder brouillon
          </button>
          <button
            style={{ padding: "12px 32px", borderRadius: "9px", background: "#c9a84c", color: "#0e0d0b", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "700" }}
            onClick={() => alert("🎉 Annonce publiée avec succès !")}>
            Publier l'annonce →
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="px-16 py-8 mt-12 text-center text-xs"
        style={{ borderTop: "1px solid #2a2820", color: "#7a7060" }}>
        © 2026 NestAfrika · Plateforme Immobilière Digitale · Cameroun
      </footer>
    </main>
  );
}