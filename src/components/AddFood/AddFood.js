import React, { useState } from 'react';
import AddFoodModal from '../AddFoodModal/AddFoodModal';
import FoodTable from '../FoodsTable/FoodTable';

const AddFood = () => {


    const [open, setOpen] = useState(false)


    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)



    return (
        <div className='mt-16'>
            <div className='fixed left-0 right-0 w-full py-2 bg-teal-600 flex items-center justify-around px-0 z-20'>
                <h2>Add Food Items And Food List</h2>

                <button onClick={openModal} className="bg-gray-700 text-white font-bold py-2 px-10  rounded hover:bg-gray-600">
                    Add Food
                </button>
            </div>


            <AddFoodModal
                openModal={openModal}
                closeModal={closeModal}
                modal={open}
            />

            <FoodTable />
        </div>
    );
};

export default AddFood;