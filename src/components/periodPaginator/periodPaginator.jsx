import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const PeriodPaginator = ({ mode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Typography>PeriodPaginator</Typography>
      </Box>
      <Box>
        <Button></Button>
        <Button></Button>
      </Box>
    </Box>
  );
};
