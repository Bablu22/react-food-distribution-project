import React, { Fragment, useRef } from 'react';
import Swal from 'sweetalert2';
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form';

const StudentUpdateModal = ({ modal, openModal, closeModal, student }) => {




    const cancelButtonRef = useRef(null)
    const shiftRef = useRef()
    const statusRef = useRef()

    const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        data.shift = shiftRef.current.value
        data.status = statusRef.current.value

        fetch(`http://localhost:5000/students/${student._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Update success',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    reset()
                }
            })


        closeModal(false)
    };

    return (
        <div>
            <Transition.Root show={modal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-50 inset-0 overflow-y-auto "
                    initialFocus={cancelButtonRef}
                    onClose={openModal}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div className='flex justify-between'>
                                                <div>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-xl leading-6 font-medium text-gray-900"
                                                    >

                                                    </Dialog.Title>
                                                </div>
                                                <div
                                                    className='cursor-pointer'
                                                    onClick={() => closeModal(false)}>
                                                    <i className="fas fa-times text-red-500 text-2xl "></i>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form bg-white w-full p-6 lg:px-16 xl:px-12  border  justify-center">
                                                    <h2 className="about-span text-center text-xl">
                                                        Update Exciting Student
                                                    </h2>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        {/* register your input into the hook by invoking the "register" function */}
                                                        <label className="block text-gray-700">Student Name</label>
                                                        <input
                                                            placeholder="Student Name"
                                                            {...register("name")}
                                                            defaultValue={student.name}
                                                            className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                                        />

                                                        <div className='flex justify-between w-full gap-3'>
                                                            <div>
                                                                <label className="block text-gray-700 mt-3">
                                                                    Student Roll
                                                                </label>
                                                                <input
                                                                    defaultValue={student.roll}
                                                                    placeholder="Student Roll"
                                                                    {...register("roll")}
                                                                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-gray-700 mt-3">
                                                                    Student Age
                                                                </label>
                                                                <input
                                                                    defaultValue={student.age}
                                                                    placeholder="Student Age"
                                                                    {...register("age")}
                                                                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between gap-3'>
                                                            <div>
                                                                <label className="block text-gray-700 mt-3">
                                                                    Student Class
                                                                </label>
                                                                <input
                                                                    defaultValue={student.classname}
                                                                    placeholder="Student Class"
                                                                    {...register("classname")}
                                                                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-gray-700 mt-3">
                                                                    Hall Name
                                                                </label>
                                                                <input
                                                                    defaultValue={student.hall}
                                                                    placeholder="Hall Name"
                                                                    {...register("hall")}
                                                                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="relative mt-4">
                                                            <label for="name" className="text-base leading-7 text-blueGray-500">Shift</label>
                                                            <select ref={shiftRef} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                                                <option >Day</option>
                                                                <option>Morning</option>

                                                            </select>
                                                        </div>
                                                        <div className="relative mt-4">
                                                            <label for="name" className="text-base leading-7 text-blueGray-500">Status</label>
                                                            <select ref={statusRef} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                                                <option >Active</option>
                                                                <option>In Active</option>
                                                            </select>
                                                        </div>

                                                        <input

                                                            className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide cursor-pointer"
                                                            type="submit"
                                                            value="Add Product"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default StudentUpdateModal;