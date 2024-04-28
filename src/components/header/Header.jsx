import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";





const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const navLinks = <>
    {user ?(

        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/art&craft'}>All Art & craft Items</NavLink></li>
            <li><NavLink to={'/addCraft'}>Add Craft</NavLink></li>
            <li><NavLink to={'/updateCraft'}>Update Craft</NavLink></li>
        </>
    ):(
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/art&craft'}>All Art & craft Items</NavLink></li>
        </>

    )}
    {user ? null :(
        <>
            <li><NavLink to={'/register'}>Register</NavLink></li>
        </>
    )

    }
    </>
    const links = <>

    </>
    return(
        <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">ArtfulGlassAndPaper</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                    <div className="flex gap-3">
                    <Tooltip />
                        <img 
                            src={ user?.photoURL} 
                            alt="User" 
                            className="w-10 h-10 rounded-full cursor-pointer" 
                            data-tip={user.displayName} 
                            
                        />
                        {
                            console.log(user)
                        }
                        <NavLink to={'/login'} className="btn" onClick={logout}>Logout</NavLink>
                    </div>

                    
                    </>
                        
                    ) : (
                        <NavLink to={'/login'} className="btn">Login</NavLink>
                )}
            </div>
        </div>
        </>
    )
};
export default Header;