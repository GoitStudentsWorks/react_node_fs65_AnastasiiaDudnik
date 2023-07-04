import UserForm from 'components/userForm/userForm';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const Account = ({ mode }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UserForm mode={mode} />
    </LocalizationProvider>
  );
};

export default Account;
