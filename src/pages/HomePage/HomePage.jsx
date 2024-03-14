import Header from "../../components/header/Header"
import BannerSection from "../../components/section/bannerSection/BannerSection"
import AboutSection from "../../components/section/aboutSection/About"
import TechSection from "../../components/section/techSection/TechSection"
import ProjectSection from "../../components/section/projectSection/ProjectSection"
import Footer from "../../components/section/footer/Footer"
import ProjectCarousel from "../../components/section/projectCarousel/ProjectCarousel"

const HomePage = () => {
    return(
        <>
        <Header/>
        <main>
            <BannerSection/>
            <AboutSection/>
            <TechSection/>
            {/* <ProjectSection/> */}
            <ProjectCarousel />
        </main>
        <Footer/>
        </>
    )
}
export default HomePage