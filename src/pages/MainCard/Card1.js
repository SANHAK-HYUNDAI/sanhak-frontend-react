import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/부품외관.JPG';
import LearnMore from '../LearnMore';

export default function Card1() {



  return (
    <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        height="140"
        img src={sheet}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #부품 외관
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br />
          실밥 터짐/돌출<br />
          굴곡/변형/고장<br />
          트림 벌어짐/간섭<br />
          파손/긁힘<br />
          가죽 주름/들뜸<br />
          투입물 고정/장착불량<br />
          얼보임/유막현상<br />
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"./LearnMore"} state = {{card : "부품 외관"}}>
        <Button size="small" >Learn More</Button>
      </Link>
      </CardActions>
    </Card>
  );
}