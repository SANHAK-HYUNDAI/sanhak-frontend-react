// material
import { Grid, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

// components
import Page from '../components/Page';

import {
AppConversionRates,
FolderList,
CAWordCloud,
FolderList2
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

const BigCategoryItem =[
  { label: '도어 개폐불량', value: 1 },
  { label: '진동', value: 2 },
  { label: '기타', value: 2 },
  { label: '녹 발생', value: 3 },
  { label: '냄새과다', value: 4 },
  { label: '사용/위치 불편', value: 33 },
  { label: '경고등 점등', value: 36 },
  { label: '조립문제', value: 69 },
  { label: '소음/이음', value: 286 },
  { label: '부품 외관', value: 320 },
  { label: '시트 작동 소음/이음', value: 410 },
  { label: '작동 불량', value: 489 },
  { label: '시트 작동불량/시트벨트_작동불량', value: 551 },
];

const SubCategoryItem = [
  { id: 1, subcategory: "시트 작동불량_각도조절/폴딩시", probability : "31.22%" },
  { id: 2, subcategory: "시트 작동불량_전후진", probability : "24.14%" },
  { id: 3, subcategory: "시트 작동불량_냉방/통풍 조절", probability : "16.70%" },
  { id: 4, subcategory: "시트 작동불량_허리지지대", probability : "9.62%" },
  { id: 5, subcategory: "시트 작동불량_난방/열선 조절", probability : "7.62%" },
  { id: 6, subcategory: "시트 작동불량_높낮이", probability : "5.26%" },
  { id: 7, subcategory: "시트 작동불량_메모리시트", probability : "3.99%" },
  { id: 8, subcategory: "시트 작동불량_암레스트", probability : "1.27%" },
  { id: 9, subcategory: "시트 작동불량_높낮이 작동불량", probability : "0.18%" },
];

const KeyWordList = [
  { index: 1, word : "시트" },
  { index: 2, word : "운전" },
  { index: 3, word : "차량" },
  { index: 4, word : "조수석" },
  { index: 5, word : "소리" },
];

// ----------------------------------------------------------------------

export default function NaverCafe() {
return (
<Page title="Dashboard: NaverCafe">
<Container>
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4" gutterBottom>
      Ro data
    </Typography>
  </Stack>

  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8}>
      <CAWordCloud title = "WordCloud"/>
      </Grid>

      <Grid item xs={15} md={6} lg={4}>
        <FolderList2 title = "Top Keywords" list = {KeyWordList}/>
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
