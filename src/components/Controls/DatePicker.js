import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, label, value, disabled, error = null, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        inputVariant="standard"
        label={label}
        size="small"
        format="MM/dd/yyyy"
        disabled={disabled}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        {...(error && { error: true, helperText: error })}
      />
    </MuiPickersUtilsProvider>
  );
}
