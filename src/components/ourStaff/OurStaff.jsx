import React from 'react';

const OurStaff = () => {
    const staffMembers = [
        { id: 1, name: 'John Doe', role: 'Founder & CEO', image: 'staff1.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Head of Operations', image: 'staff2.jpg' },
        { id: 3, name: 'Michael Johnson', role: 'Lead Designer', image: 'staff3.jpg' }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl  font-extrabold mb-8 text-center">Our Staff</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {staffMembers.map(member => (
                        <div key={member.id} className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={`/images/${member.image}`} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-700">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStaff;
