import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jason 2025 - Un Leadership de Confiance | Campagne Présidentielle",
  description:
    "Rejoignez le mouvement Jason 2025. Un leadership fort, fiable et bienveillant pour construire une France plus forte et plus unie. Découvrez notre programme et engagez-vous.",
  keywords: "Jason 2025, campagne présidentielle, France, leadership, politique, élection présidentielle",
  authors: [{ name: "Équipe Jason 2025" }],
  creator: "Jason 2025",
  publisher: "Jason 2025",
  openGraph: {
    title: "Jason 2025 - Un Leadership de Confiance",
    description: "Un leadership fort pour un avenir meilleur. Rejoignez notre mouvement pour le changement.",
    url: "https://Jason2025.fr",
    siteName: "Jason 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jason 2025 - Campagne Présidentielle",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason 2025 - Un Leadership de Confiance",
    description: "Un leadership fort pour un avenir meilleur. Rejoignez notre mouvement pour le changement.",
    images: ["/twitter-image.jpg"],
    creator: "@Jason2025FR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>

        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics ou autres scripts d'analyse
              console.log('Jason 2025 - Site de campagne chargé');
            `,
          }}
        />
      </body>
    </html>
  )
}
