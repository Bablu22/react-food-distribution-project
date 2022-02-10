import React from 'react';

const Header = () => {
    return (
        <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

            <div className="text-center">
                <div className="flex flex-1 md:w-3/4 text-white px-2">
                    <span className="relative w-full">
                        <h1 className="w-full  text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-5 px-2 pl-10 appearance-none leading-normal text-3xl mt-0 italic">Yooda Hostel Food Distrution System</h1>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;