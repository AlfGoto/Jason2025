import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Issues() {
  return (
    <section id="issues" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Se Battre pour Ce Qui Compte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions réelles pour les défis auxquels font face les familles françaises aujourd'hui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Croissance Économique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Créer des emplois bien rémunérés, soutenir les petites entreprises et assurer des opportunités
                économiques pour tous les Français.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Santé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Des soins de santé abordables et accessibles pour chaque famille française, en protégeant les
                conditions préexistantes.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Éducation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Investir dans l'avenir de nos enfants avec une éducation de qualité de la maternelle à l'université et
                aux écoles professionnelles.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Reconstruire les routes, ponts et haut débit de la France pour connecter les communautés et créer des
                emplois.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Action Climatique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Des emplois dans l'énergie propre et la protection environnementale pour un avenir durable pour nos
                enfants.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Anciens Combattants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Honorer notre engagement envers ceux qui ont servi avec de meilleurs soins de santé, prestations et
                soutien.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                En Savoir Plus
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}