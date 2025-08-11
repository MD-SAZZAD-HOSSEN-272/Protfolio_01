import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import BlureBackground from '../Componentes/BlureBackground';
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Componentes/Footer';

const HomeLayout = () => {
    return (
       <>
       <BlureBackground></BlureBackground>
        <div className='min-h-screen bg-gradient-to-br z-10 from-[#0f0f23] via-[#1a1a3c] to-[#1f1f5a] text-white'>
         <div className='w-10/12 mx-auto'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='pt-28'>
                <Outlet></Outlet>
            </main>
            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
            <ScrollToTop smooth color='pink' className='animate-bounce !bg-[#0B0B23] !flex !justify-center !items-center !border !border-[#C27AFF]' />
        </div>
       </div>
       </>
    );
};

export default HomeLayout;