import ContactForm from "../components/ContactForm";
import ExperienceNavbar from "../components/ExperienceNavbar";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
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
      <ContactForm></ContactForm>
    </main>
    )
};

export default Contact;
