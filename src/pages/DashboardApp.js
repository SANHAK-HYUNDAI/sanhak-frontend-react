// import { Link,useNavigate, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  Switch,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from 'react-router-dom';

// import {Switch} from 'react-router-dom';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Card1 from "./MainCard/Card1";
import Card2 from "./MainCard/Card2";
import Card3 from "./MainCard/Card3";
import Card4 from "./MainCard/Card4";
import Card5 from "./MainCard/Card5";
import Card6 from "./MainCard/Card6";
import Card7 from "./MainCard/Card7";
import Card8 from "./MainCard/Card8";
import Card9 from "./MainCard/Card9";
import Card10 from "./MainCard/Card10";
import Card11 from "./MainCard/Card11";
import Card12 from "./MainCard/Card12";
import Card13 from "./MainCard/Card13";
import Card14 from "./MainCard/Card14";
import Card15 from "./MainCard/Card15";

import Iconify from '../components/Iconify';
// sections
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
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
 
 
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          HYUNDAI TRANSYS
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          항목 선택<br />
          <hr
            style={{
              position: 'absolute',
              width: '82.91px',
              height: '0px',
              border: '1px solid #BCBCBC',
            }}
          />

        </Typography>
   

        <Grid container spacing={1}>
          { /* 부품 외관  */}
          <Grid item xs={3.0}>
            <Card1 />
          </Grid>
          { /* 시트 작동  */}
          <Grid item xs={3.0}>
            <Card2 />
          </Grid>
          { /* 시트 소음  */}
          <Grid item xs={3.0}>
            <Card3 />
          </Grid>
          { /* 작동 불량  */}
          <Grid item xs={3.0}>
            <Card4 />
          </Grid>
          { /* 소음/이음  */}
          <Grid item xs={3.0}>
            <Card5 />
          </Grid>
          { /* 냄새 과다  */}
          <Grid item xs={3.0}>
            <Card6 />
          </Grid>
          { /* 조립 문제  */}
          <Grid item xs={3.0}>
            <Card7 />
          </Grid>
          { /* 도어 개폐  */}
          <Grid item xs={3.0}>
            <Card8 />
          </Grid>
          { /* 기밀 불량  */}
          <Grid item xs={3.0}>
            <Card9 />
          </Grid>
          { /* 사용/위치  */}
          <Grid item xs={3.0}>
            <Card10 />
          </Grid>
          { /* 진동  */}
          <Grid item xs={3.0}>
            <Card15 />
          </Grid>
          { /* 기타  */}
          <Grid item xs={3.0}>
            <Card13 />
          </Grid>
          { /* 부품 도장  */}
          <Grid item sm={3.0}>
            <Card11 />
          </Grid>
          { /* 경고등  */}
          <Grid item sm={3.0}>
            <Card14 />
          </Grid>
          { /* 녹 발생  */}
          <Grid item sm={3.0}>
            <Card12 />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}