import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux-hooks';
import { setSort } from './controls-slice';
import { selectSort } from './controls-selectors';
import { Sort as SortType } from '../../types/sort';

import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export const Sort = () => {
  const sort = useSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleSort = (event: SelectChangeEvent<SortType>) => {
    dispatch(setSort(event.target.value as SortType));
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
