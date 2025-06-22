import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nous Contacter</h2>
          <p className="text-xl text-gray-600">
            Des questions ? Envie de faire du bénévolat ? Nous aimerions avoir de vos nouvelles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@Jason2025.fr" className="text-gray-600 hover:text-blue-600 transition-colors">
                info@Jason2025.fr
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <CardTitle>Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+33123456789" className="text-gray-600 hover:text-blue-600 transition-colors">
                01 23 45 67 89
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <CardTitle>Siège Social</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="text-gray-600 not-italic">
                123 Rue de la Campagne
                <br />
                75001 Paris, France
              </address>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}