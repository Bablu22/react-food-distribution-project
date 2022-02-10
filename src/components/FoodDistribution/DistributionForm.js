import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const DistributionForm = () => {
    const shiftRef = useRef()
    const itemRef = useRef()
    const dateRef = useRef()
    const searchRef = useRef()

    const [students, setStudents] = useState([])

    const arr = students[0]


    const [roll, setRoll] = useState('')


    const getSearchValue = () => {
        const roll = searchRef.current.value
        setRoll(roll)
    }

    useEffect(() => {
        const url = `http://localhost:5000/searchStudent?roll=${roll}`

        fetch(url)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [roll])


    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data.foods))
    }, [])


    const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        data.mealShift = shiftRef.current.value
        data.item = itemRef.current.value
        data.date = new Date(dateRef.current.value).toLocaleDateString()
        data.name = arr.name
        data.roll = arr.roll
        data.age = arr.age
        data.classname = arr.classname
        data.hall = arr.hall
        data.shift = arr.shift
        data.status = arr.status
        data.served = 'Already Served'


        fetch(`http://localhost:5000/students/${arr?._id}`, {
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
                        title: 'Served success',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    reset()
                }
            })
    };


    return (
        <div className='bg-red-400 p-4 rounded'>
            <div className='flex justify-between items-center gap-4 mb-10'>
                <input ref={searchRef} className='w-full px-4 py-1 mt-2 text-base text-black  transition duration-500 ease-in-out transform rounded bg-gray-600 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2' type="search" name="" id="" placeholder='Search Student By Roll' />
                <button onClick={getSearchValue} className='bg-gray-800 px-7 py-1 rounded mt-1 text-white'>Search</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="block text-gray-700">Student Name</label>
                <input
                    placeholder="Student Name"
                    defaultValue={arr?.name}

                    {...register("name")}
                    required
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900  px-3 leading-8 transition-colors duration-150 ease-in-out"
                />

                <div className='flex justify-between w-full gap-3'>
                    <div>
                        <label className="block text-gray-700 mt-3">
                            Student Roll
                        </label>
                        <input
                            required
                            defaultValue={arr?.roll}
                            placeholder="Student Roll"
                            {...register("roll")}
                            className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py- px-3 leading-8 transition-colors duration-150 ease-in-out"
                        />
                    </div>
                    <div className="">
                        <label for="name" className="block text-gray-700 mt-3">Shift</label>
                        <select ref={shiftRef} required className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 px-14 py-1 leading-8 transition-colors duration-150 ease-in-out">
                            <option >Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                        </select>
                    </div>

                </div>
                <div className='flex justify-between gap-3'>
                    <div>
                        <label for="name" className="block text-gray-700 mt-3">Food Items</label>
                        <select ref={itemRef} required className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 px-14 py-1.5 leading-8 transition-colors duration-150 ease-in-out">
                            {
                                foods.map(food => <option key={food.name}>{food.name}</option>)
                            }

                        </select>

                    </div>
                    <div>
                        <label className="block text-gray-700 mt-3">
                            Date
                        </label>
                        <input ref={dateRef} required className='w-full px-4 py-1 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2' type="date" name="" id="" />
                    </div>
                </div>

                <input

                    className="mt-4 w-full bg-indigo-800 text-white font-semibold py-2 rounded-md  tracking-wide cursor-pointer"
                    type="submit"
                    value="Serve Now"
                />
            </form>
        </div>
    );
};

export default DistributionForm;