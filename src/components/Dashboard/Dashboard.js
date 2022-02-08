import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Dashboard = () => {
    return (
        <div>

            <Header />
            <main>

                <div className="flex flex-col md:flex-row ">
                    <nav aria-label="alternative nav">
                        <div className="bg-gray-800  shadow-xl h-20  bottom-0  mt-12 md:relative md:h-screen z-40 w-full md:w-48 content-center">

                            <div className="bg-gray-800 md:mt-12 md:w-48 fixed md:bottom-0 md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    <Link to='/addFood'>
                                        <li className="mr-3 flex-1">
                                            <a href="#/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                                <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Add Food</span>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to='/addStudent'>
                                        <li className="mr-3 flex-1">
                                            <a href="#/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                                <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Add Student</span>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to={'/students'}>
                                        <div li className="mr-3 flex-1">
                                            <a href="#/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                                <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">All Student</span>
                                            </a>
                                        </div>
                                    </Link>
                                    <li className="mr-3 flex-1">
                                        <a href="#/" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Payments</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                    <section id="main" className=" main-conten flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">




                        <Outlet />


                    </section >
                </div >
            </main >
        </div >
    );
};

export default Dashboard;