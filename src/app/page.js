"use client";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16"
        style={{background: 'rgba(14,13,11,0.95)', borderBottom: '1px solid #2a2820'}}>
        <div style={{fontFamily: 'Georgia, serif', fontSize: '22px', color: '#c9a84c', fontWeight: 'bold'}}>
          Nest<span style={{color: '#f0e8d5'}}>Afrika</span>
        </div>
        <nav className="flex gap-2">
                {[
          {label: 'Accueil', href: '/'},
          {label: 'Explorer', href: '/explorer'},
          {label: 'Agences', href: '/agences'},
          {label: 'Publier', href: '/publier'},
        ].map((item) => (
          <a key={item.label} href={item.href}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{color: '#7a7060', textDecoration: 'none'}}
            onMouseEnter={e => e.target.style.color = '#f0e8d5'}
            onMouseLeave={e => e.target.style.color = '#7a7060'}>
            {item.label}
          </a>
        ))}
        </nav>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{background: 'none', border: '1px solid #2a2820', color: '#d4c9b0', cursor: 'pointer'}}>
            Connexion
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{background: '#c9a84c', color: '#0e0d0b', border: 'none', cursor: 'pointer'}}>
            + Publier un bien
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col justify-center px-16 pt-32 pb-20"
        style={{minHeight: '520px', background: 'linear-gradient(160deg, #1a1508 0%, #0e0d0b 60%)'}}>
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
          style={{background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', width: 'fit-content'}}>
          ✦ Plateforme immobilière N°1 en Afrique Centrale
        </div>
        <h1 style={{fontFamily: 'Georgia, serif', fontSize: '52px', fontWeight: 'bold', color: '#f0e8d5', lineHeight: '1.05', marginBottom: '18px'}}>
          Trouvez votre{' '}
          <em style={{color: '#c9a84c'}}>chez-vous</em>{' '}
          idéal
        </h1>
        <p className="text-lg mb-10 max-w-lg" style={{color: '#7a7060', lineHeight: '1.6'}}>
          Appartements, maisons, terrains, locations courte durée — tout l'immobilier camerounais en un seul endroit.
        </p>
        <div className="flex gap-8">
          {[
            {num: '2 400+', label: 'Biens disponibles'},
            {num: '180+', label: 'Agences partenaires'},
            {num: '12k', label: 'Clients satisfaits'},
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{fontFamily: 'Georgia, serif', fontSize: '28px', color: '#c9a84c', fontWeight: 'bold'}}>{stat.num}</div>
              <div className="text-xs mt-1" style={{color: '#7a7060'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BARRE DE RECHERCHE */}
      <section className="px-16 py-5" style={{background: '#161512', borderTop: '1px solid #2a2820', borderBottom: '1px solid #2a2820'}}>
        <div className="flex gap-1 mb-4">
          {['🏡 Acheter', '🔑 Louer', '🌿 Terrain', '🛌 RBnB', '🏪 Commercial'].map((tab, i) => (
            <button key={tab} className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
              style={{
                background: i === 0 ? '#c9a84c' : 'none',
                color: i === 0 ? '#0e0d0b' : '#7a7060',
                border: 'none', cursor: 'pointer'
              }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-xl px-4 py-1.5"
          style={{background: '#1e1c18', border: '1px solid #2a2820'}}>
          <span style={{opacity: 0.5}}>🔍</span>
          <input className="flex-1 bg-transparent border-none outline-none text-sm"
            style={{color: '#f0e8d5'}}
            placeholder="Quartier, ville, type de bien..." />
          <div style={{width: '1px', height: '24px', background: '#2a2820'}}></div>
          <select className="bg-transparent border-none outline-none text-sm" style={{color: '#7a7060', cursor: 'pointer'}}>
            <option>Toute ville</option>
            <option>Yaoundé</option>
            <option>Douala</option>
            <option>Bafoussam</option>
            <option>Kribi</option>
          </select>
          <div style={{width: '1px', height: '24px', background: '#2a2820'}}></div>
          <select className="bg-transparent border-none outline-none text-sm" style={{color: '#7a7060', cursor: 'pointer'}}>
            <option>Prix max</option>
            <option>50M FCFA</option>
            <option>100M FCFA</option>
            <option>200M FCFA</option>
          </select>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold"
            style={{background: '#c9a84c', color: '#0e0d0b', border: 'none', cursor: 'pointer'}}>
            Rechercher →
          </button>
        </div>
      </section>

      {/* ANNONCES */}
      <section className="px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 style={{fontFamily: 'Georgia, serif', fontSize: '22px', color: '#f0e8d5'}}>Annonces récentes</h2>
            <p className="text-xs mt-1" style={{color: '#7a7060'}}>348 biens disponibles · Yaoundé & Douala</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            {emoji: '🏠', badge: 'Vente', badgeColor: '#c9a84c', prix: '85 000 000 FCFA', titre: 'Villa Luxe — Bastos', lieu: 'Yaoundé, Bastos', specs: ['🛏 5', '🚿 4', '📐 350m²']},
            {emoji: '🏢', badge: 'Location', badgeColor: '#4aae8c', prix: '180 000 FCFA/mois', titre: 'Appartement F4 — Bonanjo', lieu: 'Douala, Bonanjo', specs: ['🛏 3', '🚿 2', '📐 120m²']},
            {emoji: '🌿', badge: 'Terrain', badgeColor: '#4a8cae', prix: '12 000 000 FCFA', titre: 'Terrain viabilisé — Odza', lieu: 'Yaoundé, Odza', specs: ['📐 800m²', '✅ Viabilisé', '📄 TF']},
            {emoji: '🛌', badge: 'RBnB', badgeColor: '#e05a3a', prix: '25 000 FCFA/nuit', titre: 'Studio Premium — Akwa', lieu: 'Douala, Akwa', specs: ['🛏 1', '🚿 1', '📶 WiFi']},
            {emoji: '🏡', badge: 'Vente', badgeColor: '#c9a84c', prix: '45 000 000 FCFA', titre: 'Villa R+1 — Omnisports', lieu: 'Yaoundé, Omnisports', specs: ['🛏 4', '🚿 3', '📐 220m²']},
            {emoji: '🏪', badge: 'Location', badgeColor: '#4aae8c', prix: '300 000 FCFA/mois', titre: 'Bureaux — Hippodrome', lieu: 'Yaoundé, Hippodrome', specs: ['📐 80m²', '🚗 Parking', '🌐 Fibre']},
          ].map((bien, i) => (
            <div key={i} className="rounded-2xl overflow-hidden cursor-pointer transition-all"
              style={{background: '#161512', border: '1px solid #2a2820'}}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#7a6530'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2820'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div className="flex items-center justify-center text-5xl relative"
                style={{height: '160px', background: 'linear-gradient(135deg, #1e1c18, #252218)'}}>
                {bien.emoji}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{background: `${bien.badgeColor}22`, color: bien.badgeColor, border: `1px solid ${bien.badgeColor}44`}}>
                  {bien.badge}
                </span>
              </div>
              <div className="p-4">
                <div style={{fontFamily: 'Georgia, serif', fontSize: '18px', color: '#c9a84c', fontWeight: 'bold'}}>{bien.prix}</div>
                <div className="font-semibold mt-1.5 mb-1" style={{color: '#f0e8d5', fontSize: '13px'}}>{bien.titre}</div>
                <div className="text-xs mb-3" style={{color: '#7a7060'}}>📍 {bien.lieu}</div>
                <div className="flex gap-3 pt-3" style={{borderTop: '1px solid #2a2820'}}>
                  {bien.specs.map((s) => (
                    <span key={s} className="text-xs" style={{color: '#7a7060'}}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-16 py-8 mt-8 text-center text-xs"
        style={{borderTop: '1px solid #2a2820', color: '#7a7060'}}>
        © 2026 NestAfrika · Plateforme Immobilière Digitale · Cameroun
      </footer>

    </main>
  );
}