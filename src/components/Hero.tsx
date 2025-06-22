import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
    return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10"></div>
        <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            Prêt à Diriger la France vers l'Avenir
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Un Leadership Fort pour un<span className="text-blue-600"> Avenir Meilleur</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Avec 20 ans de leadership éprouvé et un historique de rassemblement, je suis prêt à servir comme votre
                            prochain Président. Ensemble, nous construirons une France plus forte et plus unie.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors">
                            Rejoignez Notre Mouvement
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                            En Savoir Plus
                        </Button>
                    </div>
                    <div className="flex items-center space-x-8 pt-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">500K+</div>
                            <div className="text-sm text-gray-600">Soutiens</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">95</div>
                            <div className="text-sm text-gray-600">Départements Visités</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">1000+</div>
                            <div className="text-sm text-gray-600">Réunions Publiques</div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative z-10">
                        <Image
                            src="/imgs/jason.jpg"
                            alt="Candidat Présidentiel Jason 2025"
                            width={500}
                            height={600}
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-red-200 rounded-2xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>
    )
}