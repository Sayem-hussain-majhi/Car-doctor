import axios from 'axios';
import React, { lazy, useContext, useEffect, useState } from 'react';
import { Suspense } from 'react';
import { BASE_URL } from '../../config/base_url';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
const Loading = lazy(() => import('../../Shared/Loading'))

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [remining, setRemining] = useState([])
    // const [data, setData] = useState([])


    // useEffect(() => {
    //     axios(`${BASE_URL}/booking?email=${user?.email}`)
    //         .then(res => setBookings(res.data))
    // }, [])

    const {refetch} = useQuery({
        queryKey : ["bookins"],
        queryFn : ()=>
        fetch(`${BASE_URL}/booking?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    })
    console.log(bookings)


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${BASE_URL}/bookings/${id}`)
                    .then(res => {
                        if(res.data.deletedCount == 1){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }console.log(res.data)
                     })
                    .catch (err => console.log(err.message))
                
            }
        });

        
       
    }
console.log(remining)

return (
    <Suspense fallback={<Loading />}>
        <main className='my-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Applied Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings?.map(booking =>
                                <>
                                    <tr key={booking._id}>
                                        <th>

                                        </th>
                                        <td>
                                            <div className="font-bold">{booking.service_name}</div>
                                        </td>
                                        <td>
                                            <article>{booking.service_price}</article>
                                        </td>
                                        <td>{booking.date}</td>
                                        <th>
                                            <button onClick={() => handleDelete(booking?._id)} className='hover:text-white hover:bg-orange-600 text-orange-600 border border-orange-600 font-bold py-2 px-3 rounded duration-300'>Delete</button>

                                        </th>
                                    </tr>
                                </>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </main>
    </Suspense>
);
};

export default MyBookings;