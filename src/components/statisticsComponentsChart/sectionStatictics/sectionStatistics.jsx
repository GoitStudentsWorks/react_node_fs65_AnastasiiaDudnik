// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StatisticsChart } from '../statisticsChart/statisticsChart';
// import Spinner from 'components/spinner/spinner';
// import { BsFillCircleFill } from 'react-icons/bs';
// import moment from 'moment';
// import {
//   HeadContainer,
//   PeriodTime,
//   Period,
//   ChartContainer,
// } from '../../../pages/statisticsPage/statisticsPage.styled';
// import { CalendarBar } from '../statisticsDateBar/calendarBar';

// export const SectionStatistics = ({ mode }) => {
//   const [currentDate, setCurrentDate] = useState(moment());
//   const data = useSelector(state => state.tasks.tasksStatistics);
//   const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(fetchStatistics(currentDate.format('YYYY-MM-DD')));
//   // }, [currentDate, dispatch]);
//   console.log(currentDate.format('YYYY-MM-DD'));

//   return (
//     <>
//       <HeadContainer>
//         <CalendarBar mode={mode} />

//         <PeriodTime>
//           <Period>
//             <BsFillCircleFill fill="#FFD2DD" size={8} /> By Day
//           </Period>
//           <Period>
//             <BsFillCircleFill fill="#3E85F3" size={8} /> By Month
//           </Period>
//         </PeriodTime>
//       </HeadContainer>
//       <ChartContainer>
//         {!data.tasksStatistics ? (
//           <Spinner />
//         ) : (
//           <StatisticsChart data={data} mode={mode} />
//         )}
//       </ChartContainer>
//     </>
//   );
// };
