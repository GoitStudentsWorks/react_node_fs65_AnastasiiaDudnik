import { Box } from '@mui/material'
import ColumnsTasksList from 'components/columnsTasksList/columnsTasksList';
import DayCalendarHead from 'components/dayCalendarHead/dayCalendarHead';
import React from 'react'

export default function ChoosedDay() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: {
                xs: '100%',
                md: 'calc(100vw - 64px)',
                lg: 'calc(100%)',
            },
            margin: '0'

        }}>
            <Box sx={{ boxSizing: 'border-box' }}>
                <Box sx={{ borderColor: 'divider', }}>
                    <DayCalendarHead value={value} handleChange={handleChange} />
                </Box>
            </Box>
            <ColumnsTasksList />
        </Box>
    )
}

