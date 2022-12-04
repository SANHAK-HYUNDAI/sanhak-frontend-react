import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/시트소음.JPG'

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 190 }}>
            <CardMedia
                component="img"
                height="140"
                img src={sheet}
                alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    #시트 소음
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <br />
                    허리지지대<br />
                    전후진<br />
                    냉방조절<br />
                    각도조절/폴딩시<br />
                    높낮이<br />
                    착좌시<br />
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}