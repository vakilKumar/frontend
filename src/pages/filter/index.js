import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button, Box, Card } from '@mui/material';
import { shallowEqual, useSelector } from 'react-redux';
import { dummyProfileSelector } from '../../store/selectors';


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

const FilterComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState({});
    const cartData = useSelector(
      dummyProfileSelector.getDummyApiListData(),
      shallowEqual
    );

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
    };

    return (
        <Card sx={{ mb: 3 , p: 2}}>
            <h3>Filter by Category</h3>
            <FormGroup>
                {cartData?.map((category) => (
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
