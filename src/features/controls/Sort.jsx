import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from './controls-slice';
import { FormControl, MenuItem, Select } from '@mui/material';

export const Sort = () => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <FormControl
      sx={{
        width: '300px',
        '@media (max-width: 720px)': {
          width: '100%',
        },
      }}
      size="small"
    >
      <Select
        sx={{
          pl: '10px',
          textAlign: 'left',
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
