import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddStudent = () => {
    const shiftRef = useRef()
    const statusRef = useRef()



    const { register, handleSubmit, reset, } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        data.shift = shiftRef.current.value
        data.status = statusRef.current.value

        fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product added successfull',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    reset()
                }


            })
        console.log(data);



    };

    return (
        <div className="mt-20">
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col mx-auto w-full mt-10 lg:mt-0 rounded-md">

                <h2 className='text-center font-medium text-2xl border-b pb-5'>Add Student</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label className="block text-gray-700">Student Name</label>
                    <input
                        placeholder="Student Name"
                        {...register("name")}
                        required
                        className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />

                    <div className='flex justify-between w-full gap-3'>
                        <div>
                            <label className="block text-gray-700 mt-3">
                                Student Roll
                            </label>
                            <input
                                required
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
                                required
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
                                required
                                placeholder="Student Age"
                                {...register("classname")}
                                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mt-3">
                                Hall Name
                            </label>
                            <input
                                required
                                placeholder="Hall Name"
                                {...register("hall")}
                                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                            />
                        </div>
                    </div>

                    <div className="relative mt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Shift</label>
                        <select required ref={shiftRef} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                            <option >Day</option>
                            <option>Morning</option>

                        </select>
                    </div>
                    <div className="relative mt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Status</label>
                        <select required ref={statusRef} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
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
    );
};

export default AddStudent;