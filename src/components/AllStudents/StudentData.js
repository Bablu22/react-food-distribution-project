import React, { useState } from 'react';
import StudentUpdateModal from './StudentUpdateModal';

const StudentData = ({ student, handle, }) => {

    const { name, roll, age, classname, hall, shift, status, _id } = student

    const [open, setOpen] = useState(false)
    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <>
            <tbody className="text-gray-600 text-sm font-light">

                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">

                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p className="font-medium text-black">{name}</p>
                                <p className="text-xs font-medium text-gray-600">ID: {_id}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-medium text-black">{classname}</p>

                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-medium text-black">{roll}</p>

                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-medium text-black">{age}</p>

                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-medium text-black">{hall}</p>

                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-medium text-black">{shift}</p>

                            </div>
                        </div>
                    </td>

                    <td className="py-3 px-6 text-center">
                        {status === 'Pending' ? <span className="bg-red-200 text-black py-1 px-3 rounded-full text-xs">{status}</span> :
                            <span className="bg-green-200 text-black py-1 px-3 rounded-full text-xs">{status}</span>}
                    </td>
                    <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">

                            <div>
                                <input type="checkbox" class="form-checkbox mt-2 mr-2 h-4 w-4  text-blue-600" />
                            </div>
                            <button
                                onClick={() => handle(_id)}
                                className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokelineCap="round" strokelineJoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
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
                        </div>
                    </td>
                </tr>
            </tbody>
            <StudentUpdateModal
                openModal={openModal}
                closeModal={closeModal}
                modal={open}
                student={student}
            />
        </>
    );
};

export default StudentData;