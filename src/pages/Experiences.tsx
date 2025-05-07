import ExperienceHero from "../components/ExperienceHero";
import ExperienceNetworkEvents from "../components/ExperienceNetworkEvents.tsx";
import ExperienceNetworkCorp from "../components/ExperienceNetworkCorp.tsx";
import ExperienceNavbar from "../components/ExperienceNavbar.tsx";

const Experiences = () => {
  return (
  <main className="pt-24">
    <ExperienceNavbar/>
    <ExperienceHero/>
    <ExperienceNetworkEvents/>
    <ExperienceNetworkCorp/>
  </main>
  )
};

export default Experiences;
