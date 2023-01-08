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
import MainCard from './MainCard';
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

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json = await response.json();
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json(); // await를 await로 감싸기
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

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
       
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Grid container spacing={1}>
           <Grid item xs={3.0}> 
          {movies.map((card) => (
           // <div key={card.id}>{card.title}{card.title_long}
            <MainCard big={card.title} sub={card.title_long} />
          // </div>
          ))}
          
           </Grid>
           </Grid>
          </div>
      )}
          </div>
          </Container>
          </Page>
      );
  
}