import React from 'react'
import { TextField } from '@mui/material'
export default function LoginTextfield({ value, label, placeholder, type, onChange }) {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
      };
  return (
    <>
     <TextField
                
                variant='outlined'
                margin='normal'
                type={type}
                value={value}
                label={label}
                placeholder={placeholder}
                onChange={handleChange}
                sx={{
                  input: { color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center' },
                  label: { color: 'whitesmoke', fontWeight: 'bold', },
                }} />
    </>
  )
}
