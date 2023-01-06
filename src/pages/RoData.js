// material
import { Grid, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

// components
import Page from '../components/Page';

import {
AppTasks,
AppNewsUpdate,
AppOrderTimeline,
AppCurrentVisits,
AppWebsiteVisits,
AppTrafficBySite,
AppWidgetSummary,
AppCurrentSubject,
AppConversionRates,
FolderList,
WordCloud
} from '../sections/@dashboard/app';
import wordcloud from '../images/wordcloud.PNG';
// ----------------------------------------------------------------------

const BigCategoryItem =[
  { label: '도어 개폐불량', value: 1 },
  { label: '기밀 불량', value: 2 },
  { label: '냄새 과다', value: 3 },
  { label: '부품 도장', value: 4 },
  { label: '기타', value: 5 },
  { label: '진동', value: 15 },
  { label: '녹 발생', value: 19 },
  { label: '경고등 점등', value: 101 },
  { label: '사용/위치 불편', value: 132 },
  { label: '조립 문제', value: 134 },
  { label: '작동 불량', value: 367 },
  { label: '부품 외관', value: 1388 },
  { label: '소음/이음', value: 1682 },
  { label: '시트 작동 소음/이음', value: 2138 },
  { label: '시트 작동불량/시트벨트_작동불량', value: 2505 },
];

const SubCategoryItem = [
  { id: 1, subcategory: "시트 작동불량_각도조절/폴딩시", probability : "32.97%" },
  { id: 2, subcategory: "시트 작동불량_전후진", probability : "20.92%" },
  { id: 3, subcategory: "시트 작동불량_냉방/통풍 조절", probability : "19.16%" },
  { id: 4, subcategory: "시트 작동불량_암레스트", probability : "10.96%" },
  { id: 5, subcategory: "시트 작동불량_허리지지대", probability : "9.58%" },
  { id: 6, subcategory: "시트 작동불량_난방/열선 조절", probability : "8.18%" },
  { id: 7, subcategory: "시트 작동불량_높낮이", probability : "5.47%" },
  { id: 8, subcategory: "시트 작동불량_메모리시트", probability : "2.48%" },
  { id: 9, subcategory: "시트 작동불량_높낮이 작동불량", probability : "0.16%" },
];

// ----------------------------------------------------------------------

export default function Blog() {
return (
<Page title="Dashboard: Blog">
<Container>
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4" gutterBottom>
      Ro data
    </Typography>
  </Stack>

  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8}>
      <WordCloud title = "WordCloud"/>
      </Grid>

      <Grid item xs={15} md={6} lg={4}>
      <img src={wordcloud} alt="wordcloud" width="300" height="250" />
      </Grid>
  </Grid>
  
  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8}>
      <AppConversionRates
        title="Big Categories" chartData = {BigCategoryItem}
      />
    </Grid>
    
    <Grid item xs={15} md={6} lg={4}>
      <FolderList title="Sub Categories" list = {SubCategoryItem}/>
    </Grid>

  </Grid>
</Container>
</Page>
);
}
