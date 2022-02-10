import React, { useState } from 'react';
import UpdateFood from './UpdateFood';

const TableData = ({ product, handle }) => {

    const { name, price, _id } = product

    const [open, setOpen] = useState(false)


    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <>
            <tbody>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">

                            <div className="ml-3 mt-4">
                                <p className="text-gray-900 font-medium whitespace-no-wrap">
                                    Food name: {name}
                                </p>
                                <p className="text-gray-900 font-medium whitespace-no-wrap">
                                    ID: {_id}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {price}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                        <button
                            onClick={openModal}
                            className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-green-700 mx-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={() => handle(_id)}
                            className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg className="h-5 w-5 text-red-700 mx-2"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>

                    </td>
                </tr>
            </tbody>
            <UpdateFood
                product={product}
                modal={open}
                openModal={openModal}
                closeModal={closeModal}
            ></UpdateFood>
        </>
    );
};

export default TableData;