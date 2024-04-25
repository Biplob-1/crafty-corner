import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: '',
        showPassword: false
    });

    const togglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword
        });
    };
    return(
        <>
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input type="text" id="name" name="name"  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email"   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-600">Photo URL</label>
                        <input type="text" id="photoURL" name="photoURL" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type={formData.showPassword ? 'text' : 'password'} id="password" name="password"  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        <button type="button" className="absolute top-1/2 inset-y-0 right-0 flex items-center px-3 text-gray-600" onClick={togglePasswordVisibility}>
                            {formData.showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
                </form>
                <div className="mt-4">
                    <p className="text-gray-500">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                </div>
            </div>
        </div>
        </>
    )
};
export default Register;