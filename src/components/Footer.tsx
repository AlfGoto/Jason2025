import { Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Jason 2025</h3>
                <p className="text-sm text-gray-400">Un Leadership de Confiance</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">Financé par Jason pour Président 2025</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#issues" className="hover:text-white transition-colors">
                  Enjeux
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">S'Engager</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Bénévolat
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Faire un Don
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Boutique
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nous Suivre</h4>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/Jason2025"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com/Jason2025fr"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Jason pour Président. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}