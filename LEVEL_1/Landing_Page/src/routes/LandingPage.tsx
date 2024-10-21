import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Card1 from "../components/LandingPage/Card1"
import Card2 from "../components/LandingPage/Card2"
import Card3 from "../components/LandingPage/Card3"
// import HeroSection_1 from "../components/LandingPage/HeroSection_1"
import InfoCard from "../components/LandingPage/InfoCard"
import InternshipPostitions from "../components/LandingPage/InternshipPostitions"
import MyDetails from "../components/MyDetails"
import Navbar from "../components/Navbar"
import Parallex from "../components/Parallex"

const LandingPage = () => {
  return (
    <div className="overflow-y-scroll flex flex-col items-center">
        <Navbar/>
        <Parallex/>
        {/* <HeroSection_1/> */}
        <InfoCard/>
        <Card1/>
        <Card2/>
        <InternshipPostitions/>
        <Card3/>
        <ContactForm/>
        <Footer/>
        <MyDetails/>
    </div>
  )
}

export default LandingPage