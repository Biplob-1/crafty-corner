import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleAddCraft = (e) => {
    e.preventDefault();

    const form = e.target;

    // Validate form fields
    const image = form.image.value.trim();
    const itemName = form.item_name.value.trim();
    const subcategoryName = form.subcategory_name.value;
    const shortDescription = form.short_description.value.trim();
    const price = form.price.value.trim();
    const rating = form.rating.value.trim();
    const customization = form.customization.value;
    const processingTime = form.processing_time.value.trim();
    const stockStatus = form.stock_status.value;
    const email = form.user_email.value.trim();
    const name = form.user_name.value.trim();

    // Object to store error messages for each field
    const errors = {};

    // Check for empty fields and set error messages
    if (!image) errors.image = 'Image Url is required';
    if (!itemName) errors.itemName = 'Item Name is required';
    if (!shortDescription) errors.shortDescription = 'Short Description is required';
    if (!price) errors.price = 'Price is required';
    if (!rating) errors.rating = 'Rating is required';
    if (!processingTime) errors.processingTime = 'Processing Time is required';
    if (!email) errors.email = 'Email is required';
    if (!name) errors.name = 'Name is required';

    // Set formErrors state with errors object
    setFormErrors(errors);

    // If any error exists, exit the function
    if (Object.keys(errors).length !== 0) return;

    // Construct new craft object
    const newAddCraft = { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, email, name };

    // send data to the server
    fetch('https://artful-glass-and-paper-server.vercel.app/addCrafts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newAddCraft),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Add Craft Successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/myCraft');
            }
          });
        }
      })
      .catch(error => {
        console.error('Error adding craft:', error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md lg:max-w-[60%] p-6 bg-white rounded-md shadow-md m-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Craft Item</h2>
        <form onSubmit={handleAddCraft} method="POST">
          <div className="grid grid-cols-2  gap-4 mb-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                <input type="text" id="image" name="image" placeholder="Image URL" className={`input input-bordered w-full mt-2 ${formErrors.image ? 'input-error' : ''}`} />
                {formErrors.image && <p className="text-red-500 text-sm mt-1">{formErrors.image}</p>}
              </div>
              <div>
                <label htmlFor="item_name" className="block text-sm font-medium text-gray-700">Item Name</label>
                <input type="text" id="item_name" name="item_name" placeholder="Item Name" className={`input input-bordered w-full mt-2 ${formErrors.itemName ? 'input-error' : ''}`} />
                {formErrors.itemName && <p className="text-red-500 text-sm mt-1">{formErrors.itemName}</p>}
              </div>
          </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="subcategory_name" className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                    <select id="subcategory_name" name="subcategory_name" value={null} className="mt-1 input input-bordered w-full select">
                        <option value="Card Making">Card Making</option>
                        <option value="Scrapbooking">Scrapbooking</option>
                        <option value="Paper Quilling & origami">Paper Quilling & origami</option>
                        <option value="Glass Painting">Glass Painting</option>
                        <option value="Lampworking">Lampworking</option>
                        <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">Short Description</label>
                    <textarea type="text" id="short_description" name="short_description" placeholder="Description" className={`input input-bordered w-full mt-2 ${formErrors.shortDescription ? 'input-error' : ''}`} />
                    {formErrors.shortDescription && <p className="text-red-500 text-sm mt-1">{formErrors.shortDescription}</p>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" id="price" name="price" placeholder="Price" className={`input input-bordered w-full mt-2 ${formErrors.price ? 'input-error' : ''}`} />
                    {formErrors.price && <p className="text-red-500 text-sm mt-1">{formErrors.price}</p>}
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                    <input type="text" id="rating" name="rating" placeholder="Rating" className={`input input-bordered w-full mt-2 ${formErrors.rating ? 'input-error' : ''}`} />
                    {formErrors.rating && <p className="text-red-500 text-sm mt-1">{formErrors.rating}</p>}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization</label>
                    <select id="customization" name="customization" value={null} className="mt-1 input input-bordered w-full select">
                        {/* <option value={null}>Select</option> */}
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="processing_time" className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input type="text" id="processing_time" name="processing_time" placeholder="Time" className={`input input-bordered w-full mt-2 ${formErrors.processingTime ? 'input-error' : ''}`} />
                    {formErrors.processingTime && <p className="text-red-500 text-sm mt-1">{formErrors.processingTime}</p>}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="stock_status" className="block text-sm font-medium text-gray-700">Stock Status</label>
                    <select id="stock_status" name="stock_status" value={null} className="mt-1 input input-bordered w-full select">
                        {/* <option value={null}>Select</option> */}
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">User Email</label>
                    <input type="email" id="user_email" name="user_email" value={user?.email}  className="input input-bordered w-full mt-2" readOnly />
                    {
                      console.log(user)
                    }
                </div>
            </div>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">User Name</label>
            <input type="text" id="user_name" name="user_name" value={user?.displayName} className="input input-bordered w-full  mt-2" readOnly/>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
