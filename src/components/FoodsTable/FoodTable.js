import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import TableData from './TableData';

const FoodTable = () => {

    const [foods, setProducts] = useState([])
    const [displayFoods, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, [])





    const handleDelete = id => {
        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You wan't to delete this!",
                        icon: 'warning',
                        confirmButtonColor: '#eb4d4b',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = foods.filter(i => i._id !== id)
                            setDisplayProduct(remaining)
                        }
                    })

                }
            })
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="antialiased  ">
            <div className="container mx-auto px-4 sm:px-8 relative top-11 -z-1">
                <div className="py-8">
                    <div className='flex itmes-center'>
                        <div>
                            <h2 className="text-2xl font-semibold ">All Foods List</h2>
                        </div>
                        <div className=" flex sm:flex-row flex-col items-center">

                            <button onClick={reloadPage}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Foods
                                        </th>

                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    displayFoods.map(product => <TableData
                                        key={product._id}
                                        product={product}
                                        handle={handleDelete}
                                    // openModal={openModal}
                                    ></TableData>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodTable;