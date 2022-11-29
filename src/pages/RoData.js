// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { faker } from '@faker-js/faker';

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
} from '../sections/@dashboard/app';
import wordcloud from '../images/wordcloud.PNG';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
{ value: 'latest', label: 'Latest' },
{ value: 'popular', label: 'Popular' },
{ value: 'oldest', label: 'Oldest' },
];


const SubCategoryItem = [
  {
    id: 1,
    subcategory: "시트 불량",
    probability : 32.53
  },
  {
    id: 2,
    subcategory: "운전석",
    probability : 65.74
  },
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
    <img src={wordcloud} alt="wordcloud" width="400" height="350" />
  </Grid>

  {/** big category graph */}
  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8}>
      <AppConversionRates
        title="Big Categories"
        chartData={[
          { label: 'Italy', value: 400 },
          { label: 'Japan', value: 430 },
          { label: 'China', value: 448 },
          { label: 'Canada', value: 470 },
          { label: 'France', value: 540 },
          { label: 'Germany', value: 580 },
          { label: 'South Korea', value: 690 },
          { label: 'Netherlands', value: 1100 },
          { label: 'United States', value: 1200 },
          { label: 'United Kingdom', value: 1380 },
          { label: 'United Kingdom', value: 1380 },
          { label: 'United Kingdom', value: 1380 },
          { label: 'United Kingdom', value: 3000 },
        ]}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <FolderList title="Sub Categories" list = {SubCategoryItem} />
    </Grid>
    </Grid>
</Container>
</Page>
);
}
