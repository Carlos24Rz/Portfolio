import { Navbar } from './components/Navbar/Navbar';
import { SectionWelcome } from './components/SectionWelcome/SectionWelcome';
import { SectionAbout } from './components/SectionAbout/SectionAbout';
import { SectionExperience } from './components/SectionExperience/SectionExperience';
import { SectionProjects } from './components/SectionProjects/SectionProjects';
import { SectionContact } from './components/SectionContact/SectionContact';

function App() {
  return (
    <>
      <Navbar />
      <SectionWelcome />
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
    </>
  );
}

export { App };
