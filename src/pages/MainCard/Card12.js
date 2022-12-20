import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/녹발생.JPG'

export default function MediaCard() {
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
                    #녹 발생
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <br /><br /><br />
                    관통 부식<br />
                    녹발생<br />
                    <br /><br /><br />
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component={Link} to="./LearnMore">Learn More</Button>
            </CardActions>
        </Card>
    );
}