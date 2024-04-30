import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyCraft = () => {
    // State to store crafts data
    const [crafts, setCrafts] = useState([]);
    const{user}= useContext(AuthContext);

    // Function to fetch crafts data
    const fetchCrafts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/addCrafts', {
            });
            setCrafts(response.data.filter(item => item.email === user.email)); 
        } catch (error) {
            console.error('Error fetching crafts:', error);
        }
    };
    const handleDeleteCraft = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`http://localhost:5000/addCrafts/${id}`);
                setCrafts(crafts.filter(craft => craft._id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your craft has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.error('Error deleting craft:', error);
        }
    };


    // Fetch crafts data on component mount
    useEffect(() => {
        fetchCrafts();
    }, [user]);
    // console.log(crafts)

    return (
        <div>
            <h1 className='font-extrabold text-center'>My Crafts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {crafts.map((craft, index) => (
                    <div key={index}>
                        <div className="card max-w-sm bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={craft.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{craft.itemName}</h2>
                                <div className='flex '>
                                    <p>Price: {craft.price}</p>
                                    <p>Rating: {craft.rating}</p>
                                </div>
                                <div className='flex'>
                                    <p>customization: {craft.customization}</p>
                                    <p>stockStatus: {craft.stockStatus}</p>
                                </div>
                                
                                <div className="flex justify-between">
                                    <Link to={`/update/${craft._id}`}>
                                        <button className="btn btn-primary">Update</button>
                                    </Link>
                                    
                                <button 
                               onClick={() => handleDeleteCraft(craft._id)}
                                className="btn btn-primary bg-red-500">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCraft;
