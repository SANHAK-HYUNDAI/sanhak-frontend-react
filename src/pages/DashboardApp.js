// @mui
import React from "react";
import { Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import MainCard from './MainCard';

import images from './images';
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

        <Grid container spacing={1.5} rowGap={2.2}>
          <Grid item xs={3.0}>
           <MainCard big={"부품 외관"}  sub={['실밥 터짐/돌출', '굴곡/변형/고장','트림 벌어짐/간섭']} sheet={images.appearance}/>
          </Grid>  
          <Grid item xs={3.0}>
           <MainCard big={"시트 작동불량 / 시트벨트_작동불량"} sub={['전후진', '허리지지대']} sheet={images.seataction}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"부품 도장"} sub={[' ','변색/벗겨짐','도금 박리/불량','오염/분진']} sheet={images.painting}/>
          </Grid>
          <Grid item xs={3.0}>
            <MainCard big={"작동 불량"} sub={['오작동','작동이 쉽게 됨(가벼움)','작동안됨']} sheet={images.operation}/>
          </Grid> 
          <Grid item xs={3.0}>
            <MainCard big={"소음/이음"} sub={['공회전시','주행중','요철로/둔턱','작동시']} sheet={images.sound} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"경고등 점등"} sub={['에어백','점등안됨','엔진','경고등 점등']} sheet={images.light}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"조립문제"} sub={['코딩불량','치합불량','들뜸/떨어짐','이종품 장착']} sheet={images.assembly} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"시트 작동 소음/이음"}  sub={['허리지지대', '전후진', '냉방조절','각도조절/폴딩시']} sheet={images.seatsound}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"기밀 불량"} sub={['이물질 유입','습기','누기','',]} sheet={images.machine}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"사용/위치 불편"} sub={['작동무거움','조작어려움','승차감 불만']} sheet={images.location}/>
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"진동"} sub={['차체 진동/떨림_주행중','도어 진동/떨림_주행중','진동/떨림_주행중','']} sheet={images.vibe} />
          </Grid>
          <Grid item xs={3.0}>
           <MainCard big={"기타"} sub={['기타','막힘_상시','오디오/AVN 주변장치USB작동불량']} sheet={images.etc}/>
          </Grid>
          <Grid item sm={3.0}>
           <MainCard big={"도어 개폐 불량"} sub={['','개폐 어려움','개폐 안됨','']} sheet={images.door} />
          </Grid>
          <Grid item sm={3.0}>
          <MainCard big={"냄새과다"} sub={['','실내발생','배기가스','']} sheet={images.smell}/>
          </Grid>
          <Grid item sm={3.0}>
           <MainCard big={"녹 발생"} sub={['','관통 부식','녹 발생','']} sheet={images.rust}/>
          </Grid>
        </Grid> 
          </Container>
          </Page>
      );
  
}