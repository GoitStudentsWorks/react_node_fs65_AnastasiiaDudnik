import { Box } from '@mui/material'
import ColumnsTasksList from 'components/columnsTasksList/columnsTasksList';
import DayCalendarHead from 'components/dayCalendarHead/dayCalendarHead';
import dayjs from 'dayjs';
import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { getWeekTasks } from 'redux/tasks/operations';

export default function ChoosedDay({ day = new Date(2023, 10, 30) }) {
    const [value, setValue] = React.useState(null);
    const dispatch = useDispatch();

    const weekend = useMemo(() => {
        const arr = [];
        let i = 0; let y = 7;

        if (dayjs(day).weekday() === 0) {
            i = -7; y = 0;
        }
        let e = 0
        for (i; i < y; i++) {
            const test = dayjs(day).weekday(i + 1);

            arr[e] = {
                day: test.$D,
                weekDay: String(test.$d).slice(0, 3),
                weekDayMob: String(test.$d).slice(0, 1),
                date: test.$d,
            }
            e++
        }
        return arr
    }, [day])


    useEffect(() => {
        if (value === null) {
            setValue(dayjs(day).day() === 0 ? 6 : dayjs(day).day() - 1)
        }

        if (weekend[0] && value) {
            dispatch(getWeekTasks({
                years: new Date(weekend[0].date).getFullYear(),
                month: new Date(weekend[0].date).getMonth(),
                day: new Date(weekend[0].date).getDate(),
            }))
        }
    }, [day, dispatch, value, weekend]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    if (value === null || !weekend) {
        return
    }
    return (
        <Box sx={style.boxDay}>
            <Box sx={{ boxSizing: 'border-box' }}>
                <Box sx={{ borderColor: 'divider', }}>
                    <DayCalendarHead value={value} weekend={weekend} handleChange={handleChange} />
                </Box>
            </Box>
            <ColumnsTasksList weekend={weekend} value={value} />
        </Box>
    )
}

const style = {
    boxDay: {
        width: {
            xs: '100%',
            md: 'calc(100vw - 64px)',
            lg: 'calc(100%)',
        },
        margin: '0'
    }
}

