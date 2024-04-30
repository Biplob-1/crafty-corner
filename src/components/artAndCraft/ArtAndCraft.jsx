
import { Link, useLoaderData } from "react-router-dom";


const ArtAndCraft = () => {
    const crafts = useLoaderData() || [];
    

    return (
        <div className="overflow-x-auto">
            
                <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {crafts.map((craft, index) => (
                  <tbody>
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                              <img src={craft.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Item Name</div>
                            <div className="text-sm opacity-50">{craft.itemName}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {craft.shortDescription}
                      </td>
                      <td>{craft.price}</td>
                      <th>
                        <Link to={`/craftDetails/${craft._id}`}>
                          <button className="btn btn-ghost btn-xs bg-blue-600">View Details</button>
                        </Link>
                      </th>
                    </tr>
                  </tbody>
                  ))}
                  
                </table>
              </div> 
            
        </div>

    );
}

export default ArtAndCraft;
