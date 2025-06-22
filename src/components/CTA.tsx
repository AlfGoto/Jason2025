import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Rejoignez Notre Mouvement pour le Changement</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Ensemble, nous pouvons construire une France plus forte et plus unie. Votre voix compte, et votre soutien
          fait la différence.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            className="bg-white text-gray-900 border-0"
            required
          />
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 transition-colors">
            S'Engager
          </Button>
        </form>
        <p className="text-sm mt-4 opacity-75">
          Restez informé des événements de campagne et des opportunités de bénévolat.
        </p>
      </div>
    </section>
  )
}