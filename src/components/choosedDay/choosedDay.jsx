import { Box } from '@mui/material'
import ColumnsTasksList from 'components/columnsTasksList/columnsTasksList';
import DayCalendarHead from 'components/dayCalendarHead/dayCalendarHead';
import dayjs from 'dayjs';
import React, { useEffect } from 'react'

export default function ChoosedDay({ day = new Date(2023, 6, 7) }) {
    const [value, setValue] = React.useState(null);

    useEffect(() => {
        if (value === null)
            setValue(dayjs(day).day() - 1)
    }, [day, value]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    if (value === null) {
        return
    }
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
                    <DayCalendarHead value={value} day={day} handleChange={handleChange} />
                </Box>
            </Box>
            <ColumnsTasksList />
        </Box>
    )
}

