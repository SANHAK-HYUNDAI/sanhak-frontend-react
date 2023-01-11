import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import sheet from '../images/Dashboard images/부품외관.JPG';
import LearnMore from './LearnMore';
import Page from '../components/Page';

export default function MainCard({CardList}) {
    
    const MainCardList = (CardList.map((card) =>
    <Grid container spacing={1}> 
         <Grid item xs={3.0}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    # {card.CardName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {card.subName}
                </Typography>
            </CardContent>
                <CardActions>
                    <Link to={"./LearnMore"} state = {{card : card.CardName }}>
                        <Button size="small" >Learn More</Button>
                    </Link>
                </CardActions>
            </Grid>
        </Grid>
        )
    );

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
            <MainCardList/> 
        </Container>
        </Page>   
  );
}