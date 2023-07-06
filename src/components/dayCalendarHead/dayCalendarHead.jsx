import { Box, Tab, Tabs } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

export default function DayCalendarHead({ value, handleChange, weekend }) {

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={style.weekIconList}>
                {
                    weekend.map(({ day, weekDay, weekDayMob }) =>
                        <Tab key={weekDay}
                            sx={style.iconDayTask}
                            icon={
                                <Box sx={style.dayTitle}>
                                    <Box sx={style.desk}>{weekDay}</Box>
                                    <Box sx={style.mobile}>{weekDayMob}</Box>
                                    <Box className='numberDay' >{day}</Box>
                                </Box>}
                        />
                    )
                }
            </Tabs>
        </>
    )
}

const style = { 
    
    iconDayTask: { 
        paddingInline: '0',
        '&.Mui-selected': {
            color: '#343434',
            border: 'none'
        },
        '& .numberDay': {
            width: '20px',
            height: '20px',
            marginTop: '6px',

        },
        '&.Mui-selected .numberDay': {
            backgroundColor: '#3E85F3',
            borderRadius: '6px',
            color: '#FFFFFF',

        },
        '&': {
            width: 'calc(100% / 7)'
        },
        '& span': {
            display: 'none',
            color: '#3E85F3'
        },
    },
    dayTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter',
    },
    desk: {
        display: {
            xs: 'none',
            md: 'block'
        }
    },
    mobile: {
        display: {
            md: 'none'
        }
    },
    weekIconList: {
        '.MuiTabs-indicator': {
            display: 'none'
        },
        '.MuiButtonBase-root': {
            minWidth: {
                xs: 'calc(100%/7)',
                md: 'calc((100% - 64px) / 7)',
            },
            boxSizing: 'border-box',
        },
        bgcolor: '#FFFFFF',
        borderRadius: '8px',
        boxSizing: 'border-box',
        width: '100%'
    }
}