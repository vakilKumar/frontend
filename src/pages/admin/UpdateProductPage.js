import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import './addProduct/styles.css'; // Import the CSS file
import { useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";
import { removeCartData, setDummyApiData } from "../../store/slice";

const categoryList = [
    { name: 'fashion' },
    { name: 'shirt' },
    { name: 'jacket' },
    { name: 'mobile' },
    { name: 'laptop' },
    { name: 'shoes' },
    { name: 'home' },
    { name: 'books' }
];

const UpdateProductPage = () => {
    const dispatch =  useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const { item, id } = location.state || {};
    // console.log('data', data)
    // const { id } = useParams();
    const cartData = useSelector(
        dummyProfileSelector.getDummyApiListData(),
        shallowEqual
      );

    const [product, setProduct] = useState({});

    const getSingleProductFunction = async () => {
       
    };

    const updateProduct = async () => {
        // Update product logic here

        let temp = cartData.map((val) => ({ ...val }));

        // console.log('------product -------', data);
        
        // Update the product in temp if the title matches
        // temp = temp.map((val) => (val.title === product.title ? product : val));

        temp[id] = product
        
        console.log('------temp -------', temp);
        
        // Dispatch the updated temp array
        dispatch(setDummyApiData(temp));
    setProduct(item)
        navigate('/productDetail');
    };


    // let temp = cartData.map((val) => ({ ...val }));

    // console.log('------product -------', product)

    // temp.forEach((val, index) => {
    //     if(val.title === product.title){
    //         temp[index] = product
    //     }
    // })
    // dispatch(setDummyApiData(temp));
    // setProduct(data)

    useEffect(() => {
        setProduct(item);
    }, []);

    return (
        <div className="update-product-page">
            <div className='form-container1'>
                <h2 className='form-heading'>Update Product</h2>

                <input
                    type="text"
                    name="title"
                    value={product?.title}
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    placeholder='Product Title'
                    className='form-input'
                />

                <input
                    type="number"
                    name="price"
                    value={product?.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    placeholder='Product Price'
                    className='form-input'
                />

                <input
                    type="text"
                    name="productImageUrl"
                    value={product?.productImageUrl}
                    onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                    placeholder='Product Image Url'
                    className='form-input'
                />

                <select
                    value={product?.category}
                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                    className="form-select">
                    <option disabled>Select Product Category</option>
                    {categoryList.map((value, index) => (
                        <option key={index} value={value.name}>{value.name}</option>
                    ))}
                </select>

                <textarea
                    value={product?.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    name="description"
                    placeholder="Product Description"
                    rows="5"
                    className="form-textarea"
                ></textarea>

                <button
                    onClick={updateProduct}
                    type='button'
                    className='form-button'>
                    Update Product
                </button>
            </div>
        </div>
    );
}

export default UpdateProductPage;
