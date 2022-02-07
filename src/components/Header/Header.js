import React from 'react';

const Header = () => {
    return (
        <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

            <div class="flex flex-wrap items-center">


                <div class="flex flex-1 md:w-3/4 text-white px-2">
                    <span class="relative w-full">
                        <h1 class="w-full  text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-5 px-2 pl-10 appearance-none leading-normal">Yooda Hostel Food Distrution System</h1>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;