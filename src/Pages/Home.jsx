
import Header from '../Componentes/Header';
import About from '../Componentes/About';
import MySkill from '../Componentes/MySkill';
import MyProjects from '../Componentes/MyProjects';
import Contact from '../Componentes/Contact';
import SkillBars from '../Componentes/SkillBar';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    })
  }, [])
    return (
        <div>
            <header className='mt-10'>
                <section>
                    <Header></Header>
                </section>
            </header>
            <main>
                <section className='mt-10'>
                    <About></About>
                </section>
                <section className='mt-10'>
                    <MySkill></MySkill>
                </section>
                <section>
                    <SkillBars></SkillBars>
                </section>
                <section className='mt-10'>
                    <MyProjects></MyProjects>
                </section>
                <section className='mt-10'>
                    <Contact></Contact>
                </section>
                
            </main>
            
        </div>
    );
};

export default Home;