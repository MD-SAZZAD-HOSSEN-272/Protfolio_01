import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Componentes/Footer';

const HomeLayout = () => {
    return (
       <>
            <div className='min-h-screen text-white'>
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