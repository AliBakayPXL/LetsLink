import ExperienceHero from "../components/ExperienceHero";
import ExperienceNetworkEvents from "../components/ExperienceNetworkEvents.tsx";
import ExperienceNetworkCorp from "../components/ExperienceNetworkCorp.tsx";
import ExperienceNavbar from "../components/ExperienceNavbar.tsx";
import ExperienceConcerts from "../components/ExperienceConcerts.tsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Experiences = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait a bit to ensure components have rendered
      const scrollToSection = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      setTimeout(scrollToSection, 100); // delay allows components to mount
    }
  }, [location]);


  return (
  <main className="pt-24">
    <ExperienceNavbar/>
    <ExperienceHero/>
    <ExperienceConcerts></ExperienceConcerts>
    <ExperienceNetworkCorp/>
    <ExperienceNetworkEvents/>
  </main>
  )
};

export default Experiences;
