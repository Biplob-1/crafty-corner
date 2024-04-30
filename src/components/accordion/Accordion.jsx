import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            question: 'What are the different types of crafting techniques?',
            answer: 'Crafting techniques can vary widely, including paper crafting, sewing, knitting, crocheting, painting, woodworking, pottery, and many more.'
        },
        {
            question: 'How do I get started with crafting?',
            answer: 'To get started with crafting, you can choose a craft that interests you and start learning the basic techniques. There are plenty of tutorials, online classes, and craft books available to help you get started.'
        },
        {
            question: 'Where can I find inspiration for my craft projects?',
            answer: 'You can find inspiration for your craft projects from various sources, including nature, art galleries, craft magazines, social media platforms like Pinterest and Instagram, and even everyday objects.'
        },
        {
            question: 'What are some popular crafting trends?',
            answer: 'Some popular crafting trends include DIY home decor, upcycling and repurposing old items, hand-lettering and calligraphy, macrame, and eco-friendly crafts.'
        },
        {
            question: 'How can I sell my handmade crafts?',
            answer: 'You can sell your handmade crafts through online marketplaces like Etsy, craft fairs and markets, your own website or blog, or social media platforms like Facebook and Instagram.'
        }
    ];

    return (
        <div className="max-w-lg mx-auto">
            <h3 className='text-center my-10 text-3xl font-extrabold'>ASQ</h3>
            <div className="accordion border p-3 lg:p-20 mb-5 bg-gray-100">
                {accordionItems.map((item, index) => (
                    <div key={index} className="accordion-item ">
                        <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                            <h3>{item.question}</h3>
                            <svg
                                className={`w-6 h-6 ml-auto transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 10l5 5 5-5z" />
                            </svg>
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
