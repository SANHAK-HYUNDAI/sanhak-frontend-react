import React from "react";
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardList({title}) {
    return (
       title.map((category) => (
        <Card sx={{ maxWidth: 300}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #{title}
        </Typography>
         </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="./LearnMore">Learn More</Button>
      </CardActions>
        </Card>
        ))
    );
  }
  
  export default CardList;