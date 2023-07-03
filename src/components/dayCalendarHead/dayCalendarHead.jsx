import { Tab, Tabs } from '@mui/material'
import React from 'react'

export default function DayCalendarHead({ value, handleChange }) {


    return (
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={style.weekIconList}>
            <Tab icon={<div className='dayTitle'><div>M</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>T</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>W</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>T</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>F</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>S</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
            <Tab icon={<div className='dayTitle'><div>S</div><div className='numberDay'>01</div></div>} sx={style.iconDayTask} />
        </Tabs>
    )
}

const style = {
    iconDayTask: {
        paddingInline: '0',
        '&.Mui-selected': {
            color: '#343434',
            border: 'none'
        },
        '& .dayTitle': {
            fontFamily: 'Inter'
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
    weekIconList: {
        '.MuiTabs-indicator': {
            display: 'none'
        },
        '.MuiButtonBase-root': {
            minWidth: {
                xs: 'calc(100%/7)',
                md: 'calc((100% - 64px) / 7)',
                // lg: '',
            },
            boxSizing: 'border-box',
        },
        bgcolor: '#FFFFFF',
        borderRadius: '8px',
        boxSizing: 'border-box',
        width: '100%'
    }
}