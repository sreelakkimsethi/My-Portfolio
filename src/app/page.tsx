import PortfolioHeader from "./component/Header";
import AboutMe from "./component/About";
import Skills from "./component/Skills";
import EducationFlipBox from "./component/Education";
import ProfileSection from "./component/Home";
import ContactForm from "./component/Contact";
import PortfolioProjectsComponent from "./component/Project";

export default function Home() {
  return <>
    <PortfolioHeader/>
    <ProfileSection/>
    <AboutMe/>
    <Skills/>
    <EducationFlipBox/>
    <PortfolioProjectsComponent/>
    <ContactForm/>
  </>
}


