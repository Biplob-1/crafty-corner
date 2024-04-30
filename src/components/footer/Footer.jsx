import React from 'react';
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Website Name */}
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-4">Crafty Corner</h2>
                        <p>A place for all your crafting needs.</p>
                    </div>
                    {/* Copyright */}
                    <div className="text-white">
                        <p>&copy; 2024 Crafty Corner. All rights reserved.</p>
                    </div>
                    {/* Contact Information */}
                    <div className="text-white">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p>Email: info@craftycorner.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    {/* Social Media Links */}
                    <div className="text-white">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <FaXTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
