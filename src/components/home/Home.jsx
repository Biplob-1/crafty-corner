import { Link, useLoaderData } from "react-router-dom";
import Slider from "../slider/Slider";
import OurStaff from "../ourStaff/OurStaff";
import Accordion from "../accordion/Accordion";


const Home = () => {
    const crafts = useLoaderData() || [];
    const craftsShow = crafts.slice(0, 6)
    return (
        <>
            <Slider />
            <div className="mt-5 px-4 mx-auto">
                <h3 className="text-center text-3xl font-extrabold">Art & Craft</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {craftsShow?.map((craft, index) => (
                    <div key={index} className="mt-5">
                        <div className="card max-w-sm bg-base-100 shadow-xl h-[500px]">
                            <figure className="px-10 pt-10">
                                <img src={craft.image} alt="Shoes" className="rounded-xl h-[300px]" />
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
                                
                                <div >
                                <Link to={`/craftDetails/${craft._id}`}>
                                    <button className="btn btn-ghost w-full bg-blue-600">View Details</button>
                                </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <OurStaff></OurStaff>
            <Accordion></Accordion>
        </>
    );
};

export default Home;
