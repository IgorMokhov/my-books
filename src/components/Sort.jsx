import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

export const Sort = () => {
  const [sort, setSort] = useState('relevance');

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ width: '250px' }} size="small">
      <InputLabel>Sorting by</InputLabel>
      <Select
        sx={{ textAlign: 'left' }}
        value={sort}
        label="Sorting by"
        onChange={handleSort}
      >
        <MenuItem value={'relevance'}>Relevance</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
      </Select>
    </FormControl>
  );
};
