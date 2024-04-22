"use client"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import Business from "./components/Business"
import Feature from "./components/Feature"
import Solution from "./components/Solution"
import Footer from "./components/Footer"
const page = () => {
  return (
    <div className=" bg-black">
    <div className="">
        <Navbar />
        <Section />
        <Business />
        <Feature />
        <Solution />
        <Footer />
      </div>
    </div>
  )
}

export default page
