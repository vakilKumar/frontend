import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { deleteDoc, doc } from "firebase/firestore";
// import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";
import { setDummyApiData } from "../../store/slice";

const ProductDetail = () => {
  // const context = useContext(myContext);
  const dispatch = useDispatch()
  const cartData = useSelector(
    dummyProfileSelector.getDummyApiListData(),
    shallowEqual
  );
  const { loading, setLoading, getAllProduct, getAllProductFunction } = {};
  // console.log(getAllProduct)

  // navigate
  const navigate = useNavigate();

  // Delete product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      // await deleteDoc(doc(fireDB, 'products', id))
      toast.success("Product Deleted successfully");
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const apiCall = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // setProductData(data);
        // setProductDataBack(data);
        dispatch(setDummyApiData(data));
      });
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-skyblue-300 font-bold">All Product</h1>
        {/* Add Product Button  */}
        <Link to={"/addproduct"}>
          <button className="px-5 py-2 bg-skyblue-50 border border-skyblue-100 rounded-lg">
            Add Product
          </button>
        </Link>
      </div>

      {/* Loading  */}
      <div className="flex justify-center relative top-20">
        {/* {loading && <Loader />} */}
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-skyblue-100 text-skyblue-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                {" "}
                Date
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-skyblue-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {cartData?.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;
              return (
                <tr key={index} className="text-skyblue-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 ">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <div className="flex justify-center">
                      <img className="w-20 " src={productImageUrl} alt="" />
                    </div>
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    ₹{price}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {date}
                  </td>
                  <td
                    onClick={() =>
                      navigate("/updateproduct", { state: { item, id: index } })
                    }
                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblue-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "
                  >
                    Edit
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-skyblues-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
