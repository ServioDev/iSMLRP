import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
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
