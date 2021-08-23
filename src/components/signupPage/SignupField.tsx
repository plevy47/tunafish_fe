import React from 'react';
import { TextField } from '@fluentui/react';

const SignupField = (props: {
  label: string
  method: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { label, method } = props;

  return (
    <TextField
      type="text"
      label={label}
      onChange={(event) => {
        method(event.currentTarget.value);
      }}
    />
  );
};
export default SignupField;
