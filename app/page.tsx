import Header from './components/Header'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button'
import Training from './components/Training'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Twoinone from './components/Twoinone'
import Hero from './components/Hero'
import About from './components/About'
import Consult from './components/Consult'
import Casestudy from './components/Casestudy'
import CustomButton from './components/ui/CustomButton'
import Digital from './components/Digital'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="relative">
      <div className="">
        <Header />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      <Consult />
      <Digital />

      <Training />
      <Casestudy />
      <Blogs />
      <Twoinone />
      <Footer />
    </main>
  )
}
