import Home from "../components/Home"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jason 2025",
  description:
    "Page d'accueil officielle de la campagne Jason 2025. Découvrez notre vision pour la France et rejoignez notre mouvement pour le changement.",
}

export default function HomePage() {
  return <Home />
}
