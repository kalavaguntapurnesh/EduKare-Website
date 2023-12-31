"use client";
import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Middle from "@/app/components/Middle"
import Carousel from "@/app/components/Carousel"
import Footer from "@/app/components/Footer"
import Accordion from "@/app/components/Accordion"
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ScrollToTop />
      <Middle/>
      <Carousel/>
      <Accordion/>
      <Footer/>
    </main>
  )
}
