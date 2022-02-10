import React, { useEffect, useRef, useState } from 'react';
import DistributionForm from './DistributionForm';

const FoodDistribution = () => {

    const [students, setStudents] = useState([{}])


    const [roll, setRoll] = useState('')
    const [shift, setShift] = useState('')
    const [date, setDate] = useState('')



    const searchRef = useRef()
    const shiftRef = useRef()
    const dateRef = useRef()

    const getValueRef = () => {
        const roll = searchRef.current.value
        setRoll(roll)
        const shift = shiftRef.current.value
        setShift(shift)
        const date = new Date(dateRef.current.value).toLocaleDateString()
        setDate(date)


    }

    console.log(students);


    useEffect(() => {
        const url = `http://localhost:5000/search?roll=${roll}&shift=${shift}&date=${date}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStudents(data)


            })

            .catch(error => console.log(error))
    }, [roll, shift, date])





    return (
        <>
            <div className='mt-16 py-5  bg-blue-500'>
                <h2 className='text-2xl text-white px-8 font-bold'>Search Student</h2>
                <div className=' flex items-center justify-evenly gap-8 px-8'>
                    <input ref={searchRef} className='w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2' type="search" name="" id="" placeholder='Search Student By Roll' />
                    <select ref={shiftRef} className=" w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <option >Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                    <input ref={dateRef} className='w-full px-4 py-1 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2' type="date" name="" id="" />
                    <button onClick={getValueRef} className='bg-gray-800 px-8 py-2 rounded text-white '>Search</button>
                </div>

            </div>
            <div className='flex justify-between items-center p-8'>

                {
                    students.length === 0 ? <h2 className='text-6xl text-red-600'>Not Served</h2> : <h2 className='text-6xl text-green-600'>Already Served</h2>
                }

                <div>
                    <DistributionForm />
                </div>
            </div>
        </>
    );
};

export default FoodDistribution;