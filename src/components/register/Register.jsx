import { Link, Navigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

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

    const { createUser } = useContext(AuthContext);
    const auth = getAuth();

    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Password validation regex patterns
        const uppercaseRegex = /^(?=.*[A-Z])/;
        const lowercaseRegex = /^(?=.*[a-z])/;
        const lengthRegex = /^.{6,}$/;

        // Check if name, email, password, and photoURL fields are empty
        if (!formData.name.trim()) {
            toast.error('Name is required.');
            return;
        }
        if (!formData.email.trim()) {
            toast.error('Email is required.');
            return;
        }
        if (!formData.password.trim()) {
            toast.error('Password is required.');
            return;
        }
        if (!formData.photoURL.trim()) {
            toast.error('Photo URL is required.');
            return;
        }

        // Check if password meets complexity requirements
        if (!uppercaseRegex.test(formData.password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!lowercaseRegex.test(formData.password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }
        if (!lengthRegex.test(formData.password)) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        try {
            // Check if email already exists
            const signInMethods = await fetchSignInMethodsForEmail(auth, formData.email);
            if (signInMethods && signInMethods.length > 0) {
                toast.error('Email already exists. Please use a different email.');
                return;
            }
        
            // Register user if email does not exist
            const user = await createUser(formData.email, formData.password, formData.name, formData.photoURL);
            toast.success('User registered successfully!');
            // Navigate('/');
            
            setFormData({
                name: '',
                email: '',
                photoURL: '',
                password: '',
                showPassword: false
            });
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                toast.error('Email already exists. Please use a different email.');
            } else {
                toast.error('Error registering user: ' + error.message);
            }
        }        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-600">Photo URL</label>
                            <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input type={formData.showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  />
                            <button type="button" className="absolute top-1/2 inset-y-0 right-0 flex items-center px-3 text-gray-600" onClick={togglePasswordVisibility}>
                                {formData.showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        <button type="submit"  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
                    </form>
                    <div className="mt-4">
                        <p className="text-gray-500">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;
