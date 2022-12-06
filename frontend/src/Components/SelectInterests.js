import React from 'react'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Interests = ['Music', 'Art', 'Sports', 'Literature', 'History',
  'Science', 'Technology', 'Gardening', 'Entertainment'
];

export default function SelectInterests({interest,setInterest}) {
  // const [interest, setInterest] = React.useState([]);
// console.log(Interests);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInterest(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  // console.log(interest);

  return (
    <div>
      <FormControl sx={{ mt: 2, width: 250, 
                  input: { color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center' },
                  label: { color: 'whitesmoke', fontWeight: 'bold', },
                 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select your Interests</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={interest}
          onChange={handleChange}
          input={<OutlinedInput label="Select your Interests" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {Interests.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={interest.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}

