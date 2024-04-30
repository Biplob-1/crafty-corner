import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4 text-red-400">Error Page</h1>
            <p className="text-lg mb-8 text-red-600">Oops! Something went wrong.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
