import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800">
            <div className='w-[1200px] m-auto flex justify-between py-3 text-white px-3 items-center'>
                <div>
                    <h2 className='text-3xl text-white uppercase italic'>RIT Task app.</h2> 
                </div>

                <nav>
                    <ul className='flex'>
                        <li className='mx-2'><Link href="/task/addtask">Add Task</Link></li>
                        <li className='mx-2'><Link href="/task/mytask">My Task</Link></li>
                        <li className='mx-2'><Link href="/task/completetask">Complete Task</Link></li>
                        <li className='mx-2'><Link href="/authentication/login">Login</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;