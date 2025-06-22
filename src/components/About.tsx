import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Shield, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Un Leader en Qui Vous Pouvez Avoir Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des racines provinciales aux couloirs de l'Assemblée Nationale, j'ai consacré ma vie au service public et
            à la défense du peuple français.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Fort</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Engagement inébranlable à défendre nos valeurs et protéger notre nation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Fiable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Un historique prouvé de tenue des promesses et de livraison de résultats.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Calme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sang-froid sous pression, prenant des décisions réfléchies dans les moments difficiles.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Bienveillant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Un véritable souci pour chaque Français et le bien-être de leur famille.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon Histoire</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Né et élevé au cœur de la France, j'ai appris les valeurs du travail acharné, de l'intégrité et du
                  service de mes parents qui dirigeaient une petite entreprise familiale.
                </p>
                <p>
                  Après avoir servi notre pays dans l'armée, je suis rentré chez moi pour servir ma communauté en tant
                  que maire, puis comme votre représentant à l'Assemblée Nationale pendant les 12 dernières années.
                </p>
                <p>
                  J'ai travaillé avec tous les partis pour faire adopter une législation significative sur la santé,
                  les infrastructures et les opportunités économiques. Maintenant, je suis prêt à apporter ce même
                  esprit de collaboration à l'Élysée.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold">Service Militaire</div>
                  <div className="text-sm text-gray-600">Armée Française, 1995-2000</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold">Maire</div>
                  <div className="text-sm text-gray-600">Lyon, 2008-2012</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold">Député</div>
                  <div className="text-sm text-gray-600">5ème Circonscription, 2012-Présent</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold">Président de Commission</div>
                  <div className="text-sm text-gray-600">Affaires des Anciens Combattants, 2020-Présent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}