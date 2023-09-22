import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from './controls-slice';

export const Sort = () => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <FormControl sx={{ width: '250px' }} size="small">
      <Select
        sx={{
          pl: '10px',
          textAlign: 'left',
          backgroundColor: 'white',
          borderRadius: '20px',
        }}
        value={sort}
        onChange={handleSort}
      >
        <MenuItem value={'relevance'}>Relevance</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
      </Select>
    </FormControl>
  );
};
