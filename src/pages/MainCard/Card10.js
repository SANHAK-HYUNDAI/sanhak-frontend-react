import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/사용위치.JPG'

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
                    #사용/위치
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    작동무거움<br />
                    조작어려움<br />
                    승차감 불만<br />
                    각도불만<br />
                    시인성불만<br />
                    작동거리짧음<br />
                    위치불편<br />
                    워닝 음량/음색 불만<br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}