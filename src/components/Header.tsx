import { Star } from "lucide-react"
import Link from "next/link"

export default function Header() {
	return (<header className="bg-white shadow-sm border-b">
		<div className="container mx-auto px-4 py-4">
			<div className="flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
					<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
						<Star className="w-6 h-6 text-white" />
					</div>
					<div>
						<h1 className="text-xl font-bold text-gray-900">Jason 2025</h1>
						<p className="text-sm text-blue-600">Un Leadership de Confiance</p>
					</div>
				</Link>

				{/* Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					<Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
						À Propos
					</Link>
					<Link href="#issues" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
						Enjeux
					</Link>
					<Link href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
						Événements
					</Link>
					<Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
						Contact
					</Link>
				</nav>

				{/* Mobile Navigation - Always visible on mobile */}
				<nav className="md:hidden">
					<details className="relative">
						<summary className="list-none cursor-pointer p-2 text-gray-700 hover:text-blue-600 transition-colors">
							<div className="w-6 h-6 flex flex-col justify-center space-y-1">
								<div className="w-6 h-0.5 bg-current"></div>
								<div className="w-6 h-0.5 bg-current"></div>
								<div className="w-6 h-0.5 bg-current"></div>
							</div>
						</summary>
						<div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
							<Link
								href="#about"
								className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
							>
								À Propos
							</Link>
							<Link
								href="#issues"
								className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
							>
								Enjeux
							</Link>
							<Link
								href="#events"
								className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
							>
								Événements
							</Link>
							<Link
								href="#contact"
								className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
							>
								Contact
							</Link>
						</div>
					</details>
				</nav>
			</div>
		</div>
	</header>)
}