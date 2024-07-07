import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Services from '@/components/Services'
import Survey from '@/components/Survey'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Feature/>
      <Services/>
      <Menu/>
      <Survey/>
    </main>
  )
}
