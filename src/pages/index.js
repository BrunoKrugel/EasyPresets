//import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
//import Projects from '../components/Projects/Projects';
import Example from '../components/Examples/Example';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
//import FAQ from "../components/FAQ/FAQ";
import dynamic from 'next/dynamic';

const DynamicFaq = dynamic(() => import('../components/FAQ/FAQ'))
const DynamicProjects = dynamic(() => import('../components/Projects/Projects'))


const Home = () => {
  return (
    <Layout>
        <Section grid>
            <Hero />
            {/* <BgAnimation /> */}
        </Section>
        <Example />
        {/* <Technologies /> */}
        {/* <Timeline /> */}
        <DynamicProjects />
        {/* <Acomplishments /> */}
        <DynamicFaq/>
    </Layout>
  );
};

export default Home;
