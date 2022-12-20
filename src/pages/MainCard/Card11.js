import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/부품도장.JPG'

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
                    #부품 도장
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <br /><br /><br />
                    변색/벗겨짐<br />
                    도금 박리/불량<br />
                    오염/분진<br /><br /><br />
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component={Link} to="./LearnMore">Learn More</Button>
            </CardActions>
        </Card>
    );
}