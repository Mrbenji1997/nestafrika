import './globals.css'

export const metadata = {
  title: 'NestAfrika — Immobilier Premium',
  description: 'Plateforme immobilière digitale au Cameroun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}