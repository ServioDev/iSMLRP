import React from 'react';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Percentage(props) {
  const {
    name,
    label,
    value,
    disabled,
    error = null,
    onChange,
    ...other
  } = props;
  return (
    <TextField
      type={'number'}
      InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}
      variant="standard"
      label={label}
      name={name}
      size="small"
      value={value}
      disabled={disabled}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
