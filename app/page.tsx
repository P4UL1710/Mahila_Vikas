import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SuccessStories } from "@/components/success-stories"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SuccessStories />
      <Footer />
    </main>
  )
}
