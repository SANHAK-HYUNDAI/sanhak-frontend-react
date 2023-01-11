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
import React from "react";
import { Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import MainCard from './MainCard';

// ----------------------------------------------------------------------

export default function DashboardApp() {

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
            <MainCard big={"부품외관"}  sub={['실밥 터짐/돌출', '굴곡/변형/고장', '트림 벌어짐/간섭','파손/긁힘']} />
          </Grid>  
          <Grid item xs={3.0}>
          <MainCard big={"시트작동"} sub={['전후진', '허리지지대', '각도조절/폴딩시', '메모리시트']} />
          </Grid>
          <Grid item xs={3.0}>
            <MainCard big={"시트소음"}  sub={['허리지지대', '전후진', '냉방조절','각도조절/폴딩시']} />
            </Grid>
          <Grid item xs={3.0}>
            <MainCard big={"작동불량"} sub={['오작동','작동이 쉽게 됨(가벼움)','작동안됨','작동이 원활하지 않음(무거움)']} />
          </Grid> 
          <Grid item xs={3.0}>
            <MainCard big={"소음/이음"} sub={['공회전시','주행중','요철로/둔턱','작동시']} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"냄새과다"} sub={['','실내발생','배기가스','']} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"조립문제"} sub={['코딩불량','치합불량','들뜸/떨어짐','이종품 장착']} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"도어개폐"} sub={['','개폐 어려움','개폐 안됨','']} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"기밀불량"} sub={['이물질 유입','습기','누기','',]} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"사용/위치"} sub={['작동무거움','조작어려움','승차감 불만','각도불만']}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"진동"} sub={['차체 진동/떨림_주행중','도어 진동/떨림_주행중','진동/떨림_주행중','']} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"기 타"} sub={['기타','막힘_상시','오디오/AVN 주변장치USB작동불량','공조 불량_에어컨 시원해지지 않음']} />
          </Grid>

          <Grid item sm={3.0}>
           <MainCard big={"부품도장"} sub={[' ','변색/벗겨짐','도금 박리/불량','오염/분진']} />
          </Grid>
          <Grid item sm={3.0}>
           <MainCard big={"경고등"} sub={['에어백','점등안됨','엔진','경고등 점등']} />
          </Grid>
          <Grid item sm={3.0}>
           <MainCard big={"녹발생"} sub={['','관통 부식','녹 발생','']} />
          </Grid>
        </Grid> 
          </Container>
          </Page>
      );
  
}