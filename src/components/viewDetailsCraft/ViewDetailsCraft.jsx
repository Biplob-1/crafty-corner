import { useLoaderData } from "react-router-dom";

const ViewDetailsCraft = () => {
    const craft = useLoaderData();
    console.log(craft);
    return(
        <>
        <div>
            <h1 className='font-extrabold text-center'>{craft.itemName}</h1>
                    <div className="flex justify-center items-center"> 
                        <div className="card max-w-sm bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={craft.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="font-bold text-center">{craft.subcategoryName}</h2>
                                <p>{craft.shortDescription}</p>
                                <div className='flex '>
                                    <p><span className="font-bold">Price:</span> {craft.price}</p>
                                    <p><span className="font-bold">Rating:</span> {craft.rating}</p>
                                </div>
                                <div className='flex'>
                                    <p><span className="font-bold">Customization:</span> {craft.customization}</p>
                                    <p><span className="font-bold">Stock:</span> {craft.stockStatus}</p>
                                </div>
                                <div className='flex'>
                                    <p><span className="font-bold">Time:</span> {craft.processingTime}</p>
                                    <p><span className="font-bold">Owner:</span> {craft.name}</p>
                                </div>
                                <div>
                                    <p><span className="font-bold">Email:</span> {craft.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </>
    )
}
export default ViewDetailsCraft;