import Accomplishments from '../components/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/TimeLine';
import ScrollButton from '../components/BackToTopButton';
import { Layout } from '../layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <ScrollButton />
    </Layout>
  );
};

export default Home;
