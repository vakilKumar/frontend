import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button, Box, Card } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { dummyProfileSelector } from '../../store/selectors';
import { removeCartData } from '../../store/slice';


const categories = [
  { id: '1', name: 'Category 1' },
  { id: '2', name: 'Category 2' },
  { id: '3', name: 'Category 3' },
];


const items = [
  { id: 1, name: 'Item 1', category: '1' },
  { id: 2, name: 'Item 2', category: '2' },
  { id: 3, name: 'Item 3', category: '1' },
  { id: 4, name: 'Item 4', category: '3' },
];




const FilterComponent = ({onClick}) => {
    let dispatch = useDispatch()
    const [selectedCategories, setSelectedCategories] = useState({});
    const [filterData, setFilterData] = useState([])
    const cartData = useSelector(
      dummyProfileSelector.getDummyApiListData(),
      shallowEqual
    );


    useEffect(() => {
        let ans = [];
        cartData.forEach((val) => {
            let flag = false;
            if(ans.length === 0 ){
             ans.push(val)
            } else {
               for(let i = 0; i < ans.length; i++){
                if( ans[i].category == val.category){
                    flag = true
                }
               }
            }

            if(!flag){
           ans.push(val)
            }
        })

        setFilterData(ans)
    }, [cartData])

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedCategories({
            ...selectedCategories,
            [name]: checked,
        });
    };

    const handleFilter = () => {
        const filteredCategories = Object.keys(selectedCategories).filter(
            (key) => selectedCategories[key]
        );

        let temp = []
        cartData.forEach((val) => {
            filteredCategories.forEach((ele) => {
                if( val.id == ele){
                  temp.push(val)
                }
            })
        })

        onClick(temp)

    //     console.log('--- filteredCategories ----', filteredCategories)

    //     let temp = []
    //     cartData.forEach((val) => {
    //         filteredCategories.forEach((ele) => {
    //             if( val.id == ele){
    //               temp.push(val)
    //             }
    //         })
    //     })

    // console.log(temp.length)
    //     dispatch(removeCartData(temp));
    };

    return (
        <Card sx={{ mb: 3 , p: 2}}>
            <h3>Filter by Category</h3>
            <FormGroup>
                {filterData?.map((category) => (
                    <FormControlLabel
                        key={category.id}
                        control={
                            <Checkbox
                                checked={!!selectedCategories[category.id]}
                                onChange={handleCheckboxChange}
                                name={category.id}
                            />
                        }
                        label={category.category}
                    />
                ))}
            </FormGroup>
            <Button variant="contained" onClick={handleFilter}>
                Apply Filters
            </Button>
        </Card>
    );
};

export default FilterComponent;
