import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex justify-center w-full gap-5'>
            <div className='w-1/4 flex flex-col gap-5 bg-[#0f0f23] p-8 rounded-2xl min-h-screen'>
                <NavLink to='/dashboard/add_task' className='border px-4 hover:bg-amber-100 hover:text-black py-3 rounded-xl border-white w-fit'>Add task </NavLink>
                <NavLink to='messages' className='border px-4 hover:bg-amber-100 hover:text-black py-3 rounded-xl border-white w-fit'>All Message</NavLink>
            </div>
            <div className='w-3/4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;