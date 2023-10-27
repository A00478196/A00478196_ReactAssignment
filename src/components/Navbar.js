import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
       <>
        <nav>
            <ul>
               <li>
                  <NavLink to="/">About Me</NavLink>
               </li>
               <li>
                  <NavLink to="/myTown">My Town</NavLink>
               </li>
               
            </ul>
         </nav>
       </>
    );
   };
   
   
export default Navbar;

