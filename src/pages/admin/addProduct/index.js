// import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
// import myContext from "../../context/myContext";
import toast from "react-hot-toast";
// import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
// import Loader from "../../components/loader/Loader";
import './styles.css'
import { removeCartData, setDummyApiData } from "../../../store/slice";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../../store/selectors";

const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const AddProductPage = () => {
    // const context = useContext(myContext);
    const { loading, setLoading } = {};
    const dispatch = useDispatch()
    const cartData = useSelector(
        dummyProfileSelector.getDummyApiListData(),
        shallowEqual
      );

    // navigate 
    const navigate = useNavigate();

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity : 1,
        // time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    // Add Product Function
    const addProductFunction = async () => {
        // if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
        //     return toast.error("all fields are required")
        // } else {

            let temp = [...cartData];
            temp.push(product)
            dispatch(setDummyApiData(temp));
            navigate('/productDetail')
        // }

        

    }



    return (
        <div className="form-container">
        <div className="login-form">
            {/* Top Heading */}
            <div className="form-heading">
                <h2>Add Product</h2>
            </div>
    
            {/* Input One */}
            <div className="form-group">
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            title: e.target.value
                        });
                    }}
                    placeholder="Product Title"
                    className="form-input"
                />
            </div>
    
            {/* Input Two */}
            <div className="form-group">
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            price: e.target.value
                        });
                    }}
                    placeholder="Product Price"
                    className="form-input"
                />
            </div>
    
            {/* Input Three */}
            <div className="form-group">
                <input
                    type="text"
                    name="productImageUrl"
                    value={product.productImageUrl}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            productImageUrl: e.target.value
                        });
                    }}
                    placeholder="Product Image URL"
                    className="form-input"
                />
            </div>
    
            {/* Input Four */}
            <div className="form-group">
                <select
                    value={product.category}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            category: e.target.value
                        });
                    }}
                    className="form-select"
                >
                    <option disabled>Select Product Category</option>
                    {categoryList.map((value, index) => {
                        const { name } = value;
                        return (
                            <option key={index} value={name}>{name}</option>
                        );
                    })}
                </select>
            </div>
    
            {/* Input Five */}
            <div className="form-group">
                <textarea
                    value={product.description}
                    onChange={(e) => {
                        setProduct({
                            ...product,
                            description: e.target.value
                        });
                    }}
                    name="description"
                    placeholder="Product Description"
                    rows="5"
                    className="form-textarea"
                />
            </div>
    
            {/* Add Product Button */}
            <div className="form-group">
                <button
                    onClick={addProductFunction}
                    type="button"
                    className="form-button"
                >
                    Add Product
                </button>
            </div>
        </div>
    </div>
    
    );
}

export default AddProductPage;