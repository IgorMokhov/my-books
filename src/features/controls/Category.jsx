import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategory } from './controls-slice';

export const Category = () => {
  const category = useSelector(selectCategory);
  const dispatch = useDispatch();

  const handleCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <FormControl sx={{ width: '250px' }} size="small">
      <InputLabel>Categories</InputLabel>
      <Select
        sx={{ textAlign: 'left' }}
        value={category}
        label="Categories"
        onChange={handleCategory}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="art">Art</MenuItem>
        <MenuItem value="biography">Biography</MenuItem>
        <MenuItem value="computers">Computers</MenuItem>
        <MenuItem value="history">History</MenuItem>
        <MenuItem value="medical">Medical</MenuItem>
        <MenuItem value="poetry">Poetry</MenuItem>
      </Select>
    </FormControl>
  );
};
