import { useSelector } from 'react-redux';
import { setCategory } from './controls-slice';
import { useAppDispatch } from '../../redux-hooks';
import { selectCategory } from './controls-selectors';
import { Category as CategoryType } from '../../types';

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export const Category = () => {
  const category = useSelector(selectCategory);
  const dispatch = useAppDispatch()

  const handleCategory = (event: SelectChangeEvent<CategoryType>) => {
    dispatch(setCategory(event.target.value as CategoryType));
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
