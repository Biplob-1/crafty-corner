

const AddCraft = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md lg:max-w-[60%] p-6 bg-white rounded-md shadow-md m-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Craft Item</h2>
        <form>
          <div className="grid grid-cols-2  gap-4 mb-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                <input type="text" id="image" name="image" placeholder="Image URL" className="input input-bordered w-full mt-2" />
              </div>
              <div>
                <label htmlFor="item_name" className="block text-sm font-medium text-gray-700">Item Name</label>
                <input type="text" id="item_name" name="item_name" placeholder="Item Name" className="input input-bordered w-full mt-2" />
              </div>
          </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="subcategory_name" className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                    <input type="text" id="subcategory_name" name="subcategory_name" placeholder="Subcategory" className="input input-bordered w-full  mt-2" />
                </div>
                <div>
                    <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">Short Description</label>
                    <textarea type="text" id="short_description" name="short_description" placeholder="Description" className="input input-bordered w-full  mt-2" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" id="price" name="price" placeholder="Price" className="input input-bordered w-full  mt-2" />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                    <input type="text" id="rating" name="rating" placeholder="Rating" className="input input-bordered w-full  mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization</label>
                    <select id="customization" name="customization" value='' className="mt-1 input input-bordered w-full select">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="processing_time" className="block text-sm font-medium text-gray-700">Processing Time</label>
                    <input type="text" id="processing_time" name="processing_time" placeholder="Time" className="input input-bordered w-full mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="stock_status" className="block text-sm font-medium text-gray-700">Stock Status</label>
                    <select id="stock_status" name="stock_status" value='' className="mt-1 input input-bordered w-full select">
                        <option value="">Select</option>
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">User Email</label>
                    <input type="email" id="user_email" name="user_email" placeholder="Email" className="input input-bordered w-full mt-2" />
                </div>
            </div>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">User Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="Name" className="input input-bordered w-full  mt-2" />
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
