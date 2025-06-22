import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Issues from "./Issues"
import CTA from "./CTA"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<Header />
			<Hero />
      <About />
			<Issues />
			<CTA />
			<Contact />
			<Footer />
		</div>
	)
}
