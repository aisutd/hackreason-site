import { FC } from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import FAQ from '../components/faq'
import Schedule from '../components/schedule'
import Footer from '../components/footer'
import Winners from '../components/winners'

const App: FC = () => {
  return (
    <div>
      <Head>
        <title>HackReason</title>
      </Head>
      <Hero />
      <main className='max-w-7xl px-4 mx-auto my-0'>
        <Winners />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
