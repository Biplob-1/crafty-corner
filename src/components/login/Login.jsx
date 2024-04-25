import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {


    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                    <form >
                        {/* Email input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>
                        {/* Password input */}
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        {/* Login button */}
                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                    </form>
                    {/* Forgot password and Register links */}
                    <div className="mt-4 flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                        <NavLink to={'/register'} className="text-blue-500 hover:underline">Register</NavLink>
                    </div>
                    {/* Social login buttons */}
                    <div className="mt-4">
                        <p className="text-gray-500 mb-2">Or login with</p>
                        <div className="flex space-x-4">
                            <button className="btn btn-google">
                                <FaGoogle /> Google
                            </button>
                            <button className="btn btn-github">
                                <FaGithubSquare /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
