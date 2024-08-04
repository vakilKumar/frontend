import { Link } from "react-router-dom";
import "../../App.css";
import { shallowEqual, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Nav = () => {
  const cartData = useSelector(
    dummyProfileSelector.getCartData(),
    shallowEqual
  );
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/productDetail">Admin</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/cart">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            {cartData?.length > 0 && " ( " + cartData?.length + " )"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
