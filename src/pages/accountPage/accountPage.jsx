import UserForm from 'components/userForm/userForm';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const Account = () => {
  return (<LocalizationProvider dateAdapter={AdapterDayjs}>
    <UserForm />;
  </LocalizationProvider>)

};

export default Account;
