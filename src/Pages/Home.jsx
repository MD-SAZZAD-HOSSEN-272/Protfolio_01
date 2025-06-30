import React from 'react';
import Header from '../Componentes/Header';
import About from '../Componentes/About';
import MySkill from '../Componentes/MySkill';
import MyProjects from '../Componentes/MyProjects';
import Contact from '../Componentes/Contact';
import Footer from '../Componentes/Footer';

const Home = () => {
    return (
        <div>
            <header className='mt-10'>
                <Header></Header>
            </header>
            <main>
                <section className='mt-10'>
                    <About></About>
                </section>
                <section className='mt-10'>
                    <MySkill></MySkill>
                </section>
                <section className='mt-10'>
                    <MyProjects></MyProjects>
                </section>
                <section className='mt-10'>
                    <Contact></Contact>
                </section>
                
            </main>
            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;