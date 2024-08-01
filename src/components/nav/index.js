import { Link } from "react-router-dom";
import '../../App.css'


const Nav = () => {



    return  (
        <div>
           <ul className="nav-ul">
            {/* <li><Link to="/"> Products</Link></li> */}
            {/* <li><Link to="/add">add Products</Link></li> */}
            <li><Link to="/dashBord">DashBord</Link></li>
            <li><Link to="/logout"> Logout</Link></li>
            <li><Link to="/login"> Login</Link></li>
            {/* <li><Link to="/profile"> Profile</Link></li> */}
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/addquiz">Add quiz</Link></li>
            {/* <li><Link to="/QRCode">QR code</Link></li> */}
           </ul>
        </div>
    )
}

export default Nav;