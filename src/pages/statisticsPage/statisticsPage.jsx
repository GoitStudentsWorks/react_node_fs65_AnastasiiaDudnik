// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import { StatisticsContainer } from './statisticsPage.styled';

import { SectionStatistics } from '../../components/statisticsComponentsChart/sectionStatictics/sectionStatistics';

const Statistics = ({ mode }) => {
  // console.log({ mode });
  return (
    <StatisticsContainer>
      <SectionStatistics mode={mode} />
    </StatisticsContainer>
  );
};

export default Statistics;

// import React from 'react';
// import { StatisticsContainer } from 'pages/StatisticsPage/StatisticsPage.styled';

// import { SectionStatistics } from 'components/StatisticsPageComponents/SectionStatistics/SectionStatistics';

// export default function StatisticsPage() {
//   return (
//     <StatisticsContainer>
//       <SectionStatistics />
//     </StatisticsContainer>
//   );
// }
