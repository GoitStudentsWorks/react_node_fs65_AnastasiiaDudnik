import Box from '@mui/material/Box';
import { PeriodPaginator } from 'components/periodPaginator/periodPaginator';
import { PeriodTypeSelect } from 'components/periodTypeSelect/periodTypeSelect';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

export const CalendarToolbar = ({ mode }) => {
  const [type, setType] = useState('month');
  // const location = useLocation();
  // const pathname = location.pathname.slice(0, -11);
  // console.log('pathname', pathname);

  // useEffect(() => {
  //   if (pathname.endsWith('main/c')) {
  //     setType('day');
  //     return;
  //   }
  //   setType('month');
  // }, [pathname]);

  // console.log('type', type);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: { xs: '24px', lg: '32px' },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PeriodPaginator mode={mode} type={type} />
      </LocalizationProvider>
      <PeriodTypeSelect mode={mode} setType={setType} />
    </Box>
  );
};
