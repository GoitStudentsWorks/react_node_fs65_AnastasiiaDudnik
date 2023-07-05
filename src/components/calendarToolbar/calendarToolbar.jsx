import Box from '@mui/material/Box';
import { PeriodPaginator } from 'components/periodPaginator/periodPaginator';
import { PeriodTypeSelect } from 'components/periodTypeSelect/periodTypeSelect';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const CalendarToolbar = ({ mode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: { xs: '24px', lg: '32px' },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PeriodPaginator mode={mode} />
      </LocalizationProvider>
      <PeriodTypeSelect mode={mode} />
    </Box>
  );
};
