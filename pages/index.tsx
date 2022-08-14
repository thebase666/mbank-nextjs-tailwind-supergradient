import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../style";
import {
  Billing, Business, CardDeal, Clients, CTA,
  Footer, Navbar, Stats, Testimonials, Hero
} from "../components";


const Home: NextPage = () => {
  return (
    <div className="w-full overflow-hidden bg-primary ">

      <div className="bg-primary xl:max-w-[1280px] mx-auto w-full px-6 sm:px-16">
        <Navbar />
      </div>

      <div className=" bg-primary xl:max-w-[1280px] mx-auto w-full">
        <Hero />
      </div>

      <div className=" bg-primary xl:max-w-[1280px] mx-auto w-full px-6 sm:px-16 ">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>

    </div>
  )
}

export default Home
