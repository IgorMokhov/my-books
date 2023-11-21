import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategory } from './controls-slice';
import { FormControl, MenuItem, Select } from '@mui/material';

export const Category = () => {
  const category = useSelector(selectCategory);
  const dispatch = useDispatch();

  const handleCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <FormControl
      sx={{
        width: '300px',
        mb: '20px',
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
          '&:hover': {},
        }}
        value={category}
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
