import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import BlureBackground from '../Componentes/BlureBackground';

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
        </div>
       </div>
       </>
    );
};

export default HomeLayout;