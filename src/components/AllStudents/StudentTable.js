import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import StudentData from './StudentData';
import StudentUpdateModal from './StudentUpdateModal';

const StudentTable = () => {

    const [students, setStudents] = useState([])
    


    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [students])

    const approvedStatus = id => {
        fetch(`http://localhost:5000/students/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(students)
        })
            .then(res => res.json())
            .then((result) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Approved',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
    }
    const handleDelete = id => {
        fetch(`http://localhost:5000/students/${id}`, {
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
                            const remaining = students.filter(i => i._id !== id)
                            setStudents(remaining)
                        }
                    })

                }
            })
    }




    return (
        <div>


            <section className="container mx-auto p-2 mt-20">
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-2xl py-4 border-b'>All Students Information</h2>
                    <div className='flex justify-between'>
                        <button className='btn bg-green-400 px-8 py-1 rounded mr-4'>Active</button>
                        <button className='btn bg-red-400 px-8 py-1 rounded'>In Active</button>
                    </div>
                </div>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Student Name</th>
                                    <th className="py-3 px-6 text-left">Class</th>
                                    <th className="py-3 px-6 text-left">roll</th>
                                    <th className="py-3 px-6 text-left">Age</th>
                                    <th className="py-3 px-6 text-center">Hall</th>
                                    <th className="py-3 px-6 text-center">Shift</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            {
                                students.map(student => <StudentData
                                    key={student._id}
                                    student={student}
                                    handle={handleDelete}
                                    update={approvedStatus}
                                   
                                ></StudentData>)
                            }
                        </table>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default StudentTable;