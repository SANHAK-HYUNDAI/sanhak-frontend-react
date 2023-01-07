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
import React, { useState, useEffect} from "react";
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import CardList from '../sections/@dashboard/app/CardList';
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


export default function DashboardApp() {
  const theme = useTheme();
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("API주소").then(res => res.json()).then(res=>setCard(res))
  }, []);

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Good Morning !
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
          <Grid item xs={3.0}>
          <Card1 />
          <CardList title={card} />
          </Grid>
          </Grid>
          </Container>
          </Page>
  );
}
 
 