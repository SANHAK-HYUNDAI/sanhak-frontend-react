import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/sheet.PNG'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        img src= {sheet}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          #Tag2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        태그 2에대한 내용
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}