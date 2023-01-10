import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../images/Dashboard images/경고등.JPG';




export default function MainCard({big,sub}) {

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
          #{big}
        </Typography>
      
        <Typography variant="body2" color="text.secondary">{sub[0]}</Typography>
        <Typography variant="body2" color="text.secondary">{sub[1]}</Typography>
        <Typography variant="body2" color="text.secondary">{sub[2]}</Typography>
        <Typography variant="body2" color="text.secondary">{sub[3]}</Typography>
        
       </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="./LearnMore" state={{ bigcategory: big }}>Learn More</Button>
      </CardActions>
    </Card>
  );
};
