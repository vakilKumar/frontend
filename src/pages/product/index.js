import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  removeCartData,
  setCartData,
  setDummyApiData,
} from "../../store/slice";
import { dummyProfileSelector } from "../../store/selectors";
import CircularProgress from "@mui/material/CircularProgress";
import FilterComponent from "../filter";

function ProductComponet() {
  const dispatch = useDispatch();
  const cartData = useSelector(
    dummyProfileSelector.getCartData(),
    shallowEqual
  );
  const allData = useSelector(
    dummyProfileSelector.getDummyApiListData(),
    shallowEqual
  );

  const [productData, setProductData] = useState([]);
  const [productDataBack, setProductDataBack] = useState([]);

  const handleCount = (from, index, data) => {
    let temp = productData.map((product) => ({ ...product }));
    let card = [...cartData];

    if (from === "decrement") {
      if (temp[index].count > 0) {
        temp[index].count -= 1;
        let cart = card.pop();
        dispatch(removeCartData(card));
      }
    } else {
      if (temp[index]?.count) {
        temp[index].count += 1;
      } else {
        temp[index].count = 1;
      }
      dispatch(setCartData(temp[index]));
    }

    setProductData(temp);
  };

  useEffect(() => {
    apiCall()

    console.log(allData)
    setTimeout(() => {
      setProductData(allData);
      setProductDataBack(allData)
    }, 500)
  }, []);


  const apiCall = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setProductDataBack(data)
        dispatch(setDummyApiData(data));
      });

      
  }



  const onClick = async (filteredCategories) => {

    if(filteredCategories.length === 0){
      setProductData(productDataBack)
    } else {
    let data = productDataBack.map((product) => ({ ...product }));
    console.log('--- data ----', data)
    let temp = []
    data.forEach((val) => {
        filteredCategories.forEach((ele) => {
            if( val.category == ele.category){
              temp.push(val)
            }
        })
    })

    console.log('--- temp ---', temp)

    setProductData(temp)
  }
  }
  return (
    <div style={{
      display: 'flex'
    }}>
      <div style={{width: 400}}>
      <FilterComponent onClick={onClick}/>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {productData.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 700,
              height: 600,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          productData.map((val, index) => {
            return (
              <>
                <Card
                  style={{ maxWidth: 300, margin: "10px" }}
                  key={index.toString()}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={val.image}
                    alt="Random"
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h3> Amount: ${val.price}</h3>
                    </Typography>
                  </CardContent>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                    }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleCount("decrement", index)}
                      sx={{
                        backgroundColor: "#3f51b5",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#303f9f",
                        },
                        padding: "6px 12px",
                      }}
                    >
                      -
                    </Button>
                    <p style={{ margin: "0 10px" }}>{val?.count}</p>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleCount("increment", index, val)}
                      sx={{
                        backgroundColor: "#3f51b5",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#303f9f",
                        },
                        padding: "6px 12px",
                      }}
                    >
                      +
                    </Button>
                  </div>
                </Card>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductComponet;
