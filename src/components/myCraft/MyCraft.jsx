import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
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

    // Fetch crafts data on component mount
    useEffect(() => {
        fetchCrafts();
    }, [user]);
    console.log(crafts)

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
                                <button className="btn btn-primary">Update</button>
                                <button className="btn btn-primary">Delete</button>
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
